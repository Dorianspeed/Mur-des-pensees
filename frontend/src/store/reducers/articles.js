// == Import : local
import { GET_ARTICLES, GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR } from '../actions';

const initialState = {
  articles: [],
  loading: true,
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...action.payload],
        loading: false,
        error: '',
      };
    case GET_ARTICLES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
