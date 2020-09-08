// == Import : npm
import { combineReducers } from 'redux';

// == Import : local
import categories from './categories';
import articles from './articles';

export default combineReducers({
  categories,
  articles,
});
