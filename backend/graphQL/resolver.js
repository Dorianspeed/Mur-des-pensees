// Importation des dépendances
const { DateResolver, EmailAddressResolver } = require('graphql-scalars');
const { ApolloError } = require('apollo-server-express');
const bcrypt = require('bcrypt');

// Importation des schémas Joi
const checkUserSchema = require('./validation/checkUser');
const insertApplicationSchema = require('./validation/insertApplication');
const checkApplicationSchema = require('./validation/checkApplication');
const insertArticleSchema = require('./validation/insertArticle');
const checkArticleSchema = require('./validation/checkArticle');
const insertUserSchema = require('./validation/insertUser');
const updateUserSchema = require('./validation/updateUser');
const checkLikeAndFavoriteSchema = require('./validation/checkLikeAndFavorite');

const myResolverMap = {
    Date: DateResolver,
    EmailAddress: EmailAddressResolver,

    Application: {
        // Récupération de l'auteur d'une candidature
        async user(parent, _, { dataSources }) {
            try {
                return await dataSources.user.getUserLoader(parent.user_id);
            } 
            
            catch (error) {
                console.trace(error);
            }
        }
    },

    Article: {
        // Récupération de la catégorie d'un article
        async category(parent, _, { dataSources }) {
            try {
                return await dataSources.category.getCategoryLoader(parent.category_id);
            } 
            
            catch (error) {
                console.trace(error);
            }
        },

        // Récupération de l'auteur d'un article
        async user(parent, _, { dataSources }) {
            try {
                return await dataSources.user.getUserLoader(parent.user_id);
            } 
            
            catch (error) {
                console.trace(error);
            }
        },

        // Récupération du nombre de mentions "j'aime" d'un article
        async likes(parent, _, { dataSources }) {
            try {
                return await dataSources.like.getLikesByArticleLoader(parent.id);
            } 
            
            catch (error) {
                console.trace(error);
            }
        }
    },

    Category: {
        // Récupération des articles d'une catégorie
        async articles(parent, _, { dataSources }) {
            try {
                return await dataSources.article.getArticlesByCategoryLoader(parent.id);
            } 
            
            catch (error) {
                console.trace(error);
            }
        }
    },

    User: {
        // Récupération des articles rédigés par un utilisateur
        async articles(parent, _, { dataSources }) {
            try {
                return await dataSources.article.getArticlesByUserLoader(parent.id);
            } 
            
            catch (error) {
                console.trace(error);
            }
        },

        // Récupération des favoris d'un utilisateur
        async favorites(parent, _, { dataSources }) {
            try {
                return await dataSources.favorite.getFavoritesByUser(parent.id);
            } 
            
            catch (error) {
                console.trace(error);
            }
        }
    },

    Query: {
        // Récupération des candidatures en attente de validation
        async getPendingApplications(_, __, { dataSources }) {
            try {
                const applications = await dataSources.application.getPendingApplications();

                if(!applications) {
                    return new ApolloError ('Aucun postulat en attente de validation trouvé', 'NO_PENDING_APPLICATIONS_FOUND');
                } else {
                    return applications;
                }
            }

            catch (error) {
                console.trace(error);
            }
        },

        // Récupération de tous les articles
        async getArticles (_, __, { dataSources }) {
            try {
                return await dataSources.article.getArticles();
            }

            catch (error) {
                console.trace(error);
            }
        },

        // Récupération des articles en attente de validation
        async getPendingArticles(_, __, { dataSources }) {
            try {
                const articles = await dataSources.article.getPendingArticles();
                
                if (!articles) {
                    return new ApolloError('Aucun article en attente de validation trouvé', 'NO_PENDING_ARTICLES_FOUND');
                } else {
                    return articles;
                }
            } 
            
            catch (error) {
                console.trace(error);
            }
        },

        // Récupération de toutes les catégories
        async getCategories(_, __, { dataSources }) {
            try {
                return await dataSources.category.getCategories();
            } 
            
            catch (error) {
                console.trace(error);
            }
        },

        // Authentification / Vérification d'un utilisateur
        async checkUser(_, args, { dataSources, session }) {
            try {
                const validation = checkUserSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    const user = await dataSources.user.checkUser(args.email);

                    if (!user) {
                        return new ApolloError('Email et / ou mot de passe incorrect(s)', 'INVALID_DATA_INPUT');
                    } else {
                        const validPassword = await bcrypt.compare(args.password, user.password);

                        if (!validPassword) {
                            return new ApolloError('Email et / ou mot de passe incorrect(s)', 'INVALID_DATA_INPUT');
                        } else {
                            session.user = {
                                id: user.id,
                                role: user.role
                            };

                            return cleanedUser = {
                                id: user.id,
                                firstname: user.firstname,
                                lastname: user.lastname,
                                avatar_url: user.avatar_url,
                                email: user.email,
                                role: user.role,
                                created_at: user.created_at,
                                updated_at: user.updated_at
                            };
                        }
                    }
                }
            } 
            
            catch (error) {
                console.trace(error);
            }
        },

        // Déconnexion d'un utilisateur
        async logoutUser(_, __, { session }) {
            try {
                if (session.user) {
                    session.destroy();
                    return true;
                } else {
                    return false;
                }
            }

            catch (error) {
                console.trace(error);
            }
        }
    },

    Mutation: {
        // Insertion d'une candidature
        async insertApplication(_, args, { dataSources, session }) {
            try {
                args.user_id = session.user.id;
                const validation = insertApplicationSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    const application = await dataSources.application.checkApplication(args.user_id);
                        
                    if (application) {
                        return new ApolloError('Une candidature existe déjà', 'PENDING/APPROVED_APPLICATION_ALREADY_EXISTS');
                    } else {
                        return await dataSources.application.insertApplication(args);
                    }
                }
            }

            catch (error) {
                console.trace(error);
            }
        },

        // Validation d'une candidature
        async validateApplication(_, args, { dataSources }) {
            try {
                const validation = checkApplicationSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    const applications = await dataSources.application.getPendingApplications();

                    if (!applications) {
                        return new ApolloError('Aucune candidature en attente de validation trouvé', 'PENDING_APPLICATION_NOT_FOUND');
                    } else {
                        const foundApplication = applications.find(application => application.user_id == args.user_id && application.id == args.application_id);
                        
                        if (foundApplication) {
                            return await dataSources.application.validateApplication(args);
                        } else {
                            return new ApolloError('La candidature demandée n\'a pas été trouvée', 'REQUESTED_APPLICATION_NOT_FOUND');
                        }
                    }
                }
            }

            catch (error) {
                console.trace(error);
            }
        },

        // Invalidation d'une candidature
        async declineApplication(_, args, { dataSources }) {
            try {     
                const validation = checkApplicationSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    const applications = await dataSources.application.getPendingApplications();

                    if (!applications) {
                        return new ApolloError('Aucune candidature en attente de validation trouvé', 'PENDING_APPLICATION_NOT_FOUND');
                    } else {
                        const foundApplication = applications.find(application => application.user_id == args.user_id && application.id == args.application_id);
                        
                        if (foundApplication) {
                            return await dataSources.application.declineApplication(args);
                        } else {
                            return new ApolloError('La candidature demandée n\'a pas été trouvée', 'REQUESTED_APPLICATION_NOT_FOUND');
                        }
                    }
                }
            }

            catch (error) {
                console.trace(error);
            }
        },

        // Insertion d'un article
        async insertArticle(_, args, { dataSources, session }) {
            try {
                args.user_id = session.user.id;
                const validation = insertArticleSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    args.excerpt = args.content.split(' ').slice(0, 15).join(' ') + '...';

                    return await dataSources.article.insertArticle(args);
                }
            } 
            
            catch (error) {
                console.trace(error);
            }
        },

        // Validation d'un article
        async validateArticle(_, args, { dataSources }) {
            try {
                const validation = checkArticleSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    const articles = await dataSources.article.getPendingArticles();

                    if (!articles) {
                        return new ApolloError('Aucun article en attente de validation trouvé', 'PENDING_ARTICLE_NOT_FOUND');
                    } else {
                        const foundArticle = articles.find(article => article.id == args.id);

                        if (foundArticle) {
                            return await dataSources.article.validateArticle(args.id)
                        } else {
                            return new ApolloError('L\'article demandé n\'a pas été trouvé', 'REQUESTED_ARTICLE_NOT_FOUND');
                        }
                    }
                }
            }

            catch (error) {
                console.trace(error)
            }
        },

        // Invalidation d'un article
        async declineArticle(_, args, { dataSources }) {
            try {
                const validation = checkArticleSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    const articles = await dataSources.article.getPendingArticles();

                    if (!articles) {
                        return new ApolloError('Aucun article en attente de validation trouvé', 'PENDING_ARTICLE_NOT_FOUND');
                    } else {
                        const foundArticle = articles.find(article => article.id == args.id);

                        if (foundArticle) {
                            return await dataSources.article.declineArticle(args.id);
                        } else {
                            return new ApolloError('L\'article demandé n\'a pas été trouvé', 'REQUESTED_ARTICLE_NOT_FOUND');
                        }
                    }
                }
            }

            catch (error) {
                console.trace(error);
            }
        },

        // Insertion / Inscription d'un utilisateur
        async insertUser(_, args, { dataSources }) {
            try {
                const validation = insertUserSchema.validate(args);
                
                if (validation.error) {
                    return validation.error;
                } else {
                    const user = await dataSources.user.checkUser(args.email);

                    if (user) {
                        return new ApolloError('Cet utilisateur existe déjà', 'USER_ALREADY_EXISTS');
                    } else {
                        const salt = await bcrypt.genSalt(10);
                        args.password = await bcrypt.hash(args.password, salt);
        
                        return await dataSources.user.insertUser(args);
                    }
                }  
            } 
            
            catch (error) {
                console.trace(error);
            }
        },

        // Modification d'un utilisateur (profil)
        async updateUser(_, args, { dataSources, session }) {
            try {
                args.user_id = session.user.id;
                const validation = updateUserSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    return await dataSources.user.updateUser(args);
                }
            }
            
            catch (error) {
                console.trace(error);
            }
        },

        // Insertion d'une mention "j'aime"
        async insertLike(_, args, { dataSources, session }) {
            try {
                args.user_id = session.user.id;
                const validation = checkLikeAndFavoriteSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    const like = await dataSources.like.checkLike(args);

                    if (like) {
                        return new ApolloError('Mention "j\'aime" déjà existante', 'LIKE_ALREADY_EXISTS');
                    } else {
                        return await dataSources.like.insertLike(args);
                    }
                }
            }

            catch (error) {
                console.trace(error);
            }
        },

        // Suppression d'une mention "j'aime"
        async deleteLike(_, args, { dataSources, session }) {
            try {
                args.user_id = session.user.id;
                const validation = checkLikeAndFavoriteSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    const like = await dataSources.like.checkLike(args);
 
                    if (!like) {
                        return new ApolloError('Mention "j\'aime" non trouvé', 'LIKE_NOT_FOUND');
                    } else {
                        return await dataSources.like.deleteLike(args);
                    }
                }
            }

            catch (error) {
                console.trace(error);
            }
        },

        // Insertion d'un favori
        async insertFavorite(_, args, { dataSources, session }) {
            try {
                args.user_id = session.user.id;
                const validation = checkLikeAndFavoriteSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    const favorite = await dataSources.favorite.checkFavorite(args);

                    if (favorite) {
                        return new ApolloError('Ce favori existe déjà', 'FAVORITE_ALREADY_EXISTS');
                    } else {
                        return await dataSources.favorite.insertFavorite(args);  
                    }
                }
            }

            catch (error) {
                console.trace(error);
            }
        },

        // Suppression d'un favori
        async deleteFavorite(_, args, { dataSources, session }) {
            try {
                args.user_id = session.user.id;
                const validation = checkLikeAndFavoriteSchema.validate(args);

                if (validation.error) {
                    return validation.error;
                } else {
                    const favorite = await dataSources.favorite.checkFavorite(args);

                    if (!favorite) {
                        return new ApolloError('Aucun favori trouvé', 'FAVORITE_NOT_FOUND');
                    } else {
                        return await dataSources.favorite.deleteFavorite(args);
                    }
                }
            }

            catch (error) {
                console.trace(error);
            }
        }
    }
};

// Exportation du module
module.exports = myResolverMap;