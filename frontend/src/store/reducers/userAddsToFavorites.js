// == Import : local
import {
  GET_FAVORITES, GET_FAVORITES_SUCCESS, GET_FAVORITES_ERROR,
  INSERT_FAVORITE, INSERT_FAVORITE_SUCCESS, INSERT_FAVORITE_ERROR,
  DELETE_FAVORITE, DELETE_FAVORITE_SUCCESS, DELETE_FAVORITE_ERROR,
} from '../actions/userAddsToFavorites';

const initialState = {
  favorites: [],
  loading: false,
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        loading: true,
      };
    case GET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: [...action.payload],
        loading: false,
        error: '',
      };
    case GET_FAVORITES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case INSERT_FAVORITE:
      return {
        ...state,
        loading: true,
      };
    case INSERT_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case INSERT_FAVORITE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        loading: true,
      };
    case DELETE_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case DELETE_FAVORITE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
