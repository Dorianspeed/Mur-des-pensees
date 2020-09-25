// Importation des dépendances
const { DataSource } = require('apollo-datasource');
const DataLoader = require('dataloader');
const { ApolloError } = require('apollo-server-express');

module.exports = class ArticleDataSource extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
        this.context = config.context;
        this.client = config.context.sqlClient;
    }

    // Mise en place du DataLoader pour récupérer les articles d'une catégorie
    articlesByCategoryLoader = new DataLoader(async (ids) => {
        const articles = await this.getArticlesByCategoryBulk(ids);
        return ids.map((id) => {
            if (articles instanceof ApolloError) {
                return undefined;
            } else {
                return articles.filter(article => article.category_id === id);
            }
        });
    });

    // Mise en place du DataLoader pour récupérer les articles rédigés par un auteur
    articlesByUserLoader = new DataLoader(async (ids) => {
        const articles = await this.getArticlesByUserBulk(ids);
        return ids.map((id) => {
            if (articles instanceof ApolloError) {
                return undefined;
            } else {
                return articles.filter(article => article.user_id === id);
            }
        });
    });

    // Récupération de tous les articles
    async getArticles() {
        try {
            const articles = await this.client.query('SELECT * FROM "get_articles"()');

            if (articles.rowCount === 0) {
                return new ApolloError('Aucun article trouvé', 'NO_ARTICLES_FOUND');
            } else {
                return articles.rows;
            }
        } 
        
        catch(error) {
            console.trace(error);
        }
    }

    // Récupération des articles en attente de validation
    async getPendingArticles() {
        try {
            const articles = await this.client.query('SELECT * FROM "get_pending_articles"()');

            if (articles.rowCount === 0) {
                return undefined;
            } else {
                return articles.rows;
            }
        }

        catch (error) {
            console.trace(error)
        }
    }

    // Insertion d'un article
    async insertArticle(insertedArticle) {
        try {
            const query = {
                text: 'SELECT * FROM "insert_article"($1, $2 , $3, $4, $5, $6)',
                values: [insertedArticle.title, insertedArticle.excerpt, insertedArticle.content, insertedArticle.image_url, insertedArticle.category_id, insertedArticle.user_id]
            };
            
            const article = await this.client.query(query);

            return article.rows[0];
        } 
        
        catch (error) {
            console.trace(error);
        }
    }

    // Validation d'un article
    async validateArticle(articleId) {
        try {
            const article = await this.client.query('SELECT * FROM "validate_article"($1)', [articleId]);

            return article.rows[0];
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Invalidation d'un article
    async declineArticle(articleId) {
        try {            
            const article = await this.client.query('SELECT * FROM "decline_article"($1)', [articleId]);

            return article.rows[0];
        } 
        
        catch (error) {
            console.trace(error);
        }
    }

    // Récupération de tous les articles par les id des catégories avec le Dataloader
    async getArticlesByCategoryBulk(ids) {
        try {
            const articles = await this.client.query('SELECT * FROM "get_articles_by_category_bulk"($1)', [ids]);
            
            if (articles.rowCount === 0) {
                return new ApolloError('Aucun article trouvé', 'NO_ARTICLES_FOUND');
            } else {
                return articles.rows;
            }
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Récupération de tous les articles d'une catégorie via le Loader
    async getArticlesByCategoryLoader(categoryId) {
        try {
            return await this.articlesByCategoryLoader.load(categoryId);
        } 
        
        catch(error) {
            console.trace(error);
        }
    }

    // Récupération de tous les articles rédigés par les id des auteurs avec le Dataloader
    async getArticlesByUserBulk(ids) {
        try {
            const articles = await this.client.query('SELECT * FROM "get_articles_by_user_bulk"($1)', [ids]);
            
            if (articles.rowCount === 0) {
                return new ApolloError('Aucun article trouvé', 'NO_ARTICLES_FOUND');
            } else {
                return articles.rows;
            }
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Récupération de tous les articles rédigés par un auteur via le Loader
    async getArticlesByUserLoader(userId) {
        try {
            return await this.articlesByUserLoader.load(userId);
        } 
        
        catch(error) {
            console.trace(error);
        }
    }
};