// Importation des dépendances
const { Pool } = require('pg');
const redis = require('redis');

// Création et authentification du client Redis 
const redisClient = redis.createClient(process.env.REDIS_URL);
redisClient.auth(process.env.REDIS_PASSWORD);

// Création d'un objet contenant toutes les méthodes pour le cache Redis
const toolkit = {
    prefix: 'WALL-REQ-CACHE:',
    redisClient: redisClient,
    expirationTime: 60*60,

    // Méthode permettant de générer la clé
    generateKey(query) {
        return this.prefix + JSON.stringify(query);
    },

    // Méthode permettant de vérifier que la requête existe déjà en cache
    checkRequestInCache(query) {
        const key = this.generateKey(query);

        return new Promise((resolve, reject) => {
            this.redisClient.get(key, (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(JSON.parse(data));
                }
            })
        });
    },

    // Méthode permettant de mettre la requête en cache
    storeQueryInCache(query, result) {
        const key = this.generateKey(query);
        return new Promise((resolve, reject) => {
            this.redisClient.setex(key, this.expirationTime, JSON.stringify(result), (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            })
        });
    },

    // Méthode permettant de filtrer les requêtes qui ne doivent pas être mises en cache
    isValidRequest(query) {
        const request = query[0];
        let stringRequest = '';

        if (typeof request === 'object') {
            stringRequest = request.text;
        } else {
            stringRequest = request;
        }

        if (stringRequest.includes('insert_article') ||
            stringRequest.includes('validate_article') ||
            stringRequest.includes('decline_article') ||
            stringRequest.includes('update_user') ||
            stringRequest.includes('insert_like') ||
            stringRequest.includes('delete_like') ||
            stringRequest.includes('insert_favorite') ||
            stringRequest.includes('delete_favorite') ||
            stringRequest.includes('insert_application') ||
            stringRequest.includes('validate_application') ||
            stringRequest.includes('decline_application')) {
            return 'invalid request';
        } else if (stringRequest.includes('check_user') ||
                   stringRequest.includes('insert_user') ||
                   stringRequest.includes('check_like') ||
                   stringRequest.includes('check_favorite') ||
                   stringRequest.includes('check_application')) {
            return 'invalid request without cache flush';
        } else {
            return 'valid request';
        }
    },

    // Méthode permettant de récupérer toutes les clés
    getCacheKeys() {
        return new Promise((resolve, reject) => {
            this.redisClient.keys(this.prefix + '*', (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            })  
        });
    },

    // Méthode permettant de vider le cache
    async clearCache() {
        const keys = await this.getCacheKeys();

        if (keys.length > 0) {
            this.redisClient.del(...keys);
        }
    }
};

// On exporte un module intégrant une classe qui étend Pool et qui contient la logique de notre cache Redis
module.exports = {
    CachedPool: class extends Pool {
        async query(...params) {  
            if (toolkit.isValidRequest(params) === 'valid request') {
                const cachedResult = await toolkit.checkRequestInCache(params);

                if (cachedResult) {
                    for (const result of cachedResult.rows) {
                        result.created_at = new Date(result.created_at);
                        if (result.updated_at !== null) {
                            result.updated_at = new Date(result.updated_at);
                        }
                    }

                    return cachedResult;
                } else {
                    const freshResult = await super.query(...params);
    
                    toolkit.storeQueryInCache(params, freshResult);
    
                    return freshResult;
                }
            } else if (toolkit.isValidRequest(params) === 'invalid request') {
                toolkit.clearCache();

                return await super.query(...params);
            } else if (toolkit.isValidRequest(params) === 'invalid request without cache flush') {
                return await super.query(...params);
            }
        }
    }
};
