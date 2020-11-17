// == Import : npm
import { combineReducers } from 'redux';

// == Import : local
import categories from './categories';
import articles from './articles';
import user from './user';
import editor from './editor';
import admin from './admin';
import userLikesArticle from './userLikesArticle';
import userAddsToFavorites from './userAddsToFavorites';

export default combineReducers({
  categories,
  articles,
  user,
  editor,
  admin,
  userLikesArticle,
  userAddsToFavorites,
});
