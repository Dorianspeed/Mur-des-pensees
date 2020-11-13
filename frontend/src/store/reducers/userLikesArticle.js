// == Import : local
import {
  INSERT_LIKE, INSERT_LIKE_SUCCESS, INSERT_LIKE_ERROR,
  DELETE_LIKE, DELETE_LIKE_SUCCESS, DELETE_LIKE_ERROR,
} from '../actions/userLikesArticle';

const initialState = {
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INSERT_LIKE:
      return {
        ...state,
      };
    case INSERT_LIKE_SUCCESS:
      return {
        ...state,
        error: '',
      };
    case INSERT_LIKE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_LIKE:
      return {
        ...state,
      };
    case DELETE_LIKE_SUCCESS:
      return {
        ...state,
        error: '',
      };
    case DELETE_LIKE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
