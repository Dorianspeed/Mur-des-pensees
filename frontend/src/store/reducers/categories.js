// == Import : local
import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR } from '../actions';

const initialState = {
  categories: [],
  loading: true,
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [...action.payload],
        loading: false,
        error: '',
      };
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
