// == Import : local
import { GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR } from '../actions';

const initialState = {
  articles: [],
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...action.payload],
        error: '',
      };
    case GET_ARTICLES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
