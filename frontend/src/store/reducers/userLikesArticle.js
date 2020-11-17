// == Import : local
import {
  GET_LIKES, GET_LIKES_SUCCESS, GET_LIKES_ERROR,
  INSERT_LIKE, INSERT_LIKE_SUCCESS, INSERT_LIKE_ERROR,
  DELETE_LIKE, DELETE_LIKE_SUCCESS, DELETE_LIKE_ERROR,
} from '../actions/userLikesArticle';

const initialState = {
  likes: [],
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LIKES:
      return {
        ...state,
      };
    case GET_LIKES_SUCCESS:
      return {
        ...state,
        likes: [...action.payload],
        error: '',
      };
    case GET_LIKES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
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
