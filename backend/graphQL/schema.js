// Importation de la dépendance
const { gql } = require('apollo-server-express');

const schema = gql`
    # Custom Scalars
    scalar Date
    scalar EmailAddress

    # On définit nos entités
    type Application {
        id: ID!
        content: String!
        state: String!
        created_at: Date!
        updated_at: Date
        user: User!
    }

    type Article {
        id: ID!
        title: String!
        excerpt: String!
        content: String!
        image_url: String!
        created_at: Date!
        updated_at: Date
        category: Category!
        user: User!
        likes: Int
    }

    type Category {
        id: ID!
        name: String!
        image_url: String!
        created_at: Date!
        updated_at: Date
        articles: [Article]
    }

    type User {
        id: ID!
        firstname: String!
        lastname: String!
        email: EmailAddress!
        avatar_url: String!
        role: String!
        created_at: Date!
        updated_at: Date
        articles: [Article]
        favorites: [Article]
    }

    # On définit nos points d'entrée de l'API
    type Query {
        getPendingApplications: [Application]
        getArticles: [Article]
        getPendingArticles: [Article]
        getCategories: [Category]
        checkUser(email: EmailAddress!, password: String!): User
        logoutUser: Boolean!
    }

    # On définit nos points d'entrée de l'API qui entraîneront des modifications
    type Mutation {
        insertApplication(content: String!): Application
        validateApplication(application_id: ID!, user_id: ID!): User
        declineApplication(application_id: ID!, user_id: ID!): Application
        insertArticle(title: String!, content: String!, image_url: String!, category_id: ID!): Article
        validateArticle(id: ID!): Article
        declineArticle(id: ID!): Article
        insertUser(firstname: String!, lastname: String!, email: EmailAddress!, password: String!, confirmed_password: String!, avatar_url: String!): User
        updateUser(firstname: String!, lastname: String!, email: EmailAddress!, avatar_url: String!): User
        insertLike(article_id: ID!): Boolean!
        deleteLike(article_id: ID!): Boolean!
        insertFavorite(article_id: ID!): Boolean!
        deleteFavorite(article_id: ID!): Boolean!
    }
`;

// Exportation du module
module.exports = schema;