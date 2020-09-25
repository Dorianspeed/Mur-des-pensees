// Importation des modules
const ApplicationDataSource = require('./ApplicationDataSource');
const ArticleDataSource = require('./ArticleDataSource');
const CategoryDataSource = require('./CategoryDataSource');
const UserDataSource = require('./UserDataSource');
const LikeDataSource = require('./LikeDataSource');
const FavoriteDataSource = require('./FavoriteDataSource');

// Création des instances et exportation du module
module.exports = {
    application: new ApplicationDataSource(),
    article: new ArticleDataSource(),
    category: new CategoryDataSource(),
    user: new UserDataSource(),
    like: new LikeDataSource(),
    favorite: new FavoriteDataSource()
};