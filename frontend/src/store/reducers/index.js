// == Import : npm
import { combineReducers } from 'redux';

// == Import : local
import categories from './categories';
import articles from './articles';
import user from './user';

export default combineReducers({
  categories,
  articles,
  user,
});
