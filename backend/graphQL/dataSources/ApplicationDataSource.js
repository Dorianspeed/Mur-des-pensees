// Importation de la dépendance
const { DataSource } = require('apollo-datasource');

module.exports = class ApplicationDataSource extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
        this.context = config.context;
        this.client = config.context.sqlClient;
    }

    // Récupération des candidatures en attente de validation
    async getPendingApplications() {
        try {
            const applications = await this.client.query('SELECT * FROM "get_pending_applications"()');

            return applications.rows;
        } 
        
        catch(error) {
            console.trace(error);
        }
    }

    // Vérification de l'existence d'une candidature par l'id d'un utilisateur
    async checkApplication(userId) {
        try {
            const application = await this.client.query('SELECT * FROM "check_application"($1)', [userId]);

            if (application.rowCount === 0) {
                return undefined;
            } else {
                return application.rows;
            }
        }

        catch(error) {
            console.trace(error);
        }
    }

    // Insertion d'une candidature
    async insertApplication(insertedApplication) {
        try {
            const query = {
                text: 'SELECT * FROM "insert_application"($1, $2)',
                values: [insertedApplication.content, insertedApplication.user_id]
            };
            
            const application = await this.client.query(query);

            return application.rows[0];
        } 
        
        catch (error) {
            console.trace(error);
        }
    }

    // Validation d'une candidature
    async validateApplication(validatedApplication) {
        try {
            const query = {
                text: 'SELECT * FROM "validate_application"($1, $2)',
                values: [validatedApplication.application_id, validatedApplication.user_id]
            };
            
            const application = await this.client.query(query);

            return application.rows[0];
        } 
        
        catch (error) {
            console.trace(error);
        }
    }

    // Invalidation d'une candidature 
    async declineApplication(declinedApplication) {
        try {
            const query = {
                text: 'SELECT * FROM "decline_application"($1)',
                values: [declinedApplication.application_id]
            };
            
            const application = await this.client.query(query);

            return application.rows[0];
        } 
        
        catch (error) {
            console.trace(error);
        }
    }
};
