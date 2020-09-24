// Importation des dépendances nécessaires
require('dotenv').config();
const { Client } = require('pg');
const bcrypt = require('bcrypt');

// Importation des data
const applications = require('./data/applications.json');
const articles = require('./data/articles.json');
const categories = require('./data/categories.json');
const favorites = require('./data/user_adds_to_favorites_article.json');
const likes = require('./data/user_likes_article.json');
const users = require('./data/users.json');

// Mise en place de la fonction d'importation
(async () => {
    try {
        // On crée un nouveau client et on le connecte
        const connectionString = process.env.PG_URL_ADMIN;
        const client = new Client({connectionString});
        await client.connect();
        console.log('Client connected');
    
        // On vide les tables avant d'importer les data
        await client.query('TRUNCATE TABLE "app"."article", "app"."category", "app"."user", "app"."user_adds_to_favorites_article", "app"."user_likes_article", "admin"."application"');
        console.log('Tables cleaned');
    
        // Insertion des data de la table categories
        for (let category of categories) {
            const query = {
                text: `INSERT INTO "app"."category" ("name", "image_url")
                        VALUES ($1, $2)`,
                values: [category.name, category.image_url]
            };
            await client.query(query);
        }
    
        console.log('Categories data inserted');
    
        // Insertion des data de la table user
        for (let user of users) {
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(user.password, salt);
    
            const query = {
                text: `INSERT INTO "app"."user" ("firstname", "lastname", "email", "password", "avatar_url", "role")
                        VALUES ($1, $2, $3, $4, $5, $6)`,
                values: [user.firstname, user.lastname, user.email, encryptedPassword, user.avatar_url, user.role]
            };
            await client.query(query);
        }
    
        console.log('Users data inserted');
    
        // Insertion des data de la table article
        for (let article of articles) {
            const query = {
                text: `INSERT INTO "app"."article" ("title", "excerpt", "content", "image_url", "state", "category_id", "user_id")
                        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                values: [article.title, article.excerpt, article.content, article.image_url, article.state, article.category_id, article.user_id]
            };
            await client.query(query);
        }
    
        console.log('Articles data inserted');
        
        // Insertion des data de la table application
        for (let application of applications) {
            const query = {
                text: `INSERT INTO "admin"."application" ("content", "state", "user_id")
                        VALUES ($1, $2, $3)`,
                values: [application.content, application.state, application.user_id]
            };
            await client.query(query);
        }
        
        console.log('Applications data inserted');
    
        // Insertion des data de la table user_adds_to_favorites_article
        for (let favorite of favorites) {
            const query = {
                text: `INSERT INTO "app"."user_adds_to_favorites_article" ("user_id", "article_id")
                        VALUES ($1, $2)`,
                values: [favorite.user_id, favorite.article_id]
            };
            await client.query(query);
        }
        
        console.log('Favorites data inserted');
        
        // Insertion des data de la table user_likes_article
        for (let like of likes) {
            const query = {
                text: `INSERT INTO "app"."user_likes_article" ("user_id", "article_id")
                        VALUES ($1, $2)`,
                values: [like.user_id, like.article_id]
            };
            await client.query(query);
        }
    
        console.log('Likes data inserted');
    
        // Déconnexion du client
        await client.end();
        console.log('Client disconnected');
    }

    catch (error) {
        console.trace(error);
    }
})();