// Importation des dépendances
const { DataSource } = require('apollo-datasource');
const DataLoader = require('dataloader');
const { ApolloError } = require('apollo-server-express');

module.exports = class UserDataSource extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
        this.context = config.context;
        this.client = config.context.sqlClient;
    }

    // Mise en place du DataLoader pour récupérer l'auteur d'un article ou d'une candidature
    usersLoader = new DataLoader(async (ids) => {
        const users = await this.getUsersBulk(ids);
        return ids.map((id) => {
            if (users instanceof ApolloError) {
                return undefined;
            } else {
                return users.find(user  => user.id === id);
            }
        });
    });

    // Authentification / Vérification d'un utilisateur
    async checkUser(email) {
        try {
            const user = await this.client.query('SELECT * FROM "check_user"($1)', [email]);
            if (user.rows[0].id === null) {
                return undefined;
            } else {
                return user.rows[0];
            }
        } 
        
        catch (error) {
            console.trace(error);
        }
    }

    // Insertion / Inscription d'un utilisateur
    async insertUser(insertedUser) {
        try {
            const query = {
                text: 'SELECT * FROM "insert_user"($1, $2, $3, $4, $5)',
                values: [insertedUser.firstname, insertedUser.lastname, insertedUser.email, insertedUser.password, insertedUser.avatar_url]
            };

            const user = await this.client.query(query);

            return user.rows[0];
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Modification d'un utilisateur (profil)
    async updateUser(updatedUser) {
        try {
            const query = {
                text: 'SELECT * FROM "update_user"($1, $2, $3, $4, $5)',
                values: [updatedUser.firstname, updatedUser.lastname, updatedUser.email, updatedUser.avatar_url, updatedUser.user_id]
            };

            const user = await this.client.query(query);

            return user.rows[0];
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Récupération de toutes les utilisateurs par leur id avec le DataLoader
    async getUsersBulk(ids) {
        try {
            const users = await this.client.query('SELECT * FROM "get_users_bulk"($1)', [ids]);

            if (users.rowCount === 0) {
                return new ApolloError('Aucun utilisateur trouvé', 'NO_USERS_FOUND');
            } else {
                return users.rows;
            }
        }

        catch (error) {
            console.trace(error);
        }
    }

    // Récupération d'un utilisateur par son id via le Loader
    async getUserLoader(userId) {
        try {
            return await this.usersLoader.load(userId);
        }

        catch(error) {
            console.trace(error);
        }
    }
};