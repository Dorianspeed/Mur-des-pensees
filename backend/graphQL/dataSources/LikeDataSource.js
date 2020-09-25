// Importation des dépendances
const { DataSource } = require('apollo-datasource');
const DataLoader = require('dataloader');

module.exports = class LikeDataSource extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
        this.context = config.context;
        this.client = config.context.sqlClient;
    }

    // Mise en place du DataLoader pour récupérer le nombre de mentions "j'aime" d'un article
    likesLoader = new DataLoader(async (ids) => {
        const likes = await this.getLikesByArticleBulk(ids);
        return ids.map((id) => {
            const counter = likes.find(like  => like.article_id === id);
            if (counter) {
                return counter.likes;
            } else {
                return undefined;
            }
        });
    });

    // Vérification qu'un article a déjà reçu ou non une mention "j'aime" par un utilisateur donné
    async checkLike(checkedLike) {
        try {
            const like = await this.client.query('SELECT * FROM "check_like"($1, $2)', [checkedLike.user_id, checkedLike.article_id]);
            
            if (like.rows[0].id === null) {
                return undefined;
            } else {
                return like.rows[0];
            }
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Insertion d'une mention "j'aime"
    async insertLike(insertedLike) {
        try {
            const query = {
                text: 'SELECT * FROM "insert_like"($1, $2)',
                values: [insertedLike.user_id, insertedLike.article_id]
            };

            await this.client.query(query);

            return true;
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Suppression d'une mention "j'aime"
    async deleteLike(deletedLike) {
        try {
            const query = {
                text: 'SELECT * FROM "delete_like"($1, $2)',
                values: [deletedLike.user_id, deletedLike.article_id]
            };

            await this.client.query(query);

            return true;
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Récupération de toutes les mentions "j'aime" par les id des articles avec le DataLoader
    async getLikesByArticleBulk(ids)  {
        try {
            const likes = await this.client.query('SELECT * FROM "get_likes_by_article_bulk"($1)', [ids]);

            return likes.rows;
        }
        
        catch (error) {
            console.trace(error);
        }
    }

    // Récupération de toutes les mentions "j'aime" par l'id d'un article avec le Loader
    async getLikesByArticleLoader(articleId) {
        try {
            return await this.likesLoader.load(articleId);
        } 
        
        catch(error) {
            console.trace(error);
        }
    }
};