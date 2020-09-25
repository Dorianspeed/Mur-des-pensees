// Importation des dépendances
const { DataSource } = require('apollo-datasource');

module.exports = class FavoriteDataSource extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
        this.context = config.context;
        this.client = config.context.sqlClient;
    }

    // Vérification qu'un a article a déjà été mis en favori ou non par un utilisateur donné
    async checkFavorite(checkedFavorite) {
        try {
            const favorite = await this.client.query('SELECT * FROM "check_favorite"($1, $2)', [checkedFavorite.user_id, checkedFavorite.article_id]);
            if (favorite.rows[0].id === null) {
                return undefined;
            } else {
                return favorite.rows[0];
            }
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Insertion d'un favori
    async insertFavorite(insertedFavorite) {
        try {
            const query = {
                text: 'SELECT * FROM "insert_favorite"($1, $2)',
                values: [insertedFavorite.user_id, insertedFavorite.article_id]
            };

            await this.client.query(query);

            return true;
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Suppression d'un favori
    async deleteFavorite(deletedFavorite) {
        try {
            const query = {
                text: 'SELECT * FROM "delete_favorite"($1, $2)',
                values: [deletedFavorite.user_id, deletedFavorite.article_id]
            };
            
            await this.client.query(query);

            return true;
        } 
        
        catch (error) {
            console.trace(error);
        }
    }

    // Récupération des articles favoris d'un utilisateur
    async getFavoritesByUser(userId) {
        try {
            const favorites = await this.client.query('SELECT * FROM "get_favorites_by_user"($1)', [userId]);

            if (favorites.rowCount === 0) {
                return undefined;
            } else {
                return favorites.rows;
            }
        }
        
        catch(error) {
            console.trace(error);
        }
    }
};