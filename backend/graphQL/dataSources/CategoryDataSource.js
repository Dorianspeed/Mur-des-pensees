// Importation des dépendances
const { DataSource } = require('apollo-datasource');
const DataLoader = require('dataloader');
const { ApolloError } = require('apollo-server-express');

module.exports = class CategoryDataSource extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
        this.context = config.context;
        this.client = config.context.sqlClient;
    }

    // Mise en place du DataLoader pour récupérer la catégorie d'un article
    categoriesLoader = new DataLoader(async (ids) => {
        const categories = await this.getCategoriesBulk(ids);
        return ids.map((id) => {
            if (categories instanceof ApolloError) {
                return undefined;
            } else {
                return categories.find(category  => category.id === id);
            }
        });
    });

    // Récupération de toutes les catégories
    async getCategories() {
        try {
            const categories = await this.client.query('SELECT * FROM "get_categories"()');

            if (categories.rowCount === 0) {
                return new ApolloError('Aucune catégorie trouvée.', 'NO_CATEGORIES_FOUND');
            } else {
                return categories.rows;
            }  
        } 
        
        catch (error) {
            console.trace(error);
        }
    }

    // Récupération de toutes les catégories par leur id avec le DataLoader
    async getCategoriesBulk(ids) {
        try {
            const categories = await this.client.query('SELECT * FROM "get_categories_bulk"($1)', [ids]);

            if (categories.rowCount === 0) {
                return new ApolloError('Aucune catégorie trouvée.', 'NO_CATEGORIES_FOUND');
            } else {
                return categories.rows;
            }
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Récupération de la catégorie d'un article par son id via le Loader
    async getCategoryLoader(categoryId) {
        try {
            return await this.categoriesLoader.load(categoryId);
        }

        catch(error) {
            console.trace(error);
        }
    }
};