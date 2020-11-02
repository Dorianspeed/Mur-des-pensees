// == Import : local
import { GET_ARTICLES, GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR } from '../actions';

const initialState = {
  articles: [],
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

export const getArticleById = (state, id) => {
  const article = state.articles.articles.find((element) => {
    const articleId = element.id;
    const articleIdToFind = id;
    return articleId === articleIdToFind;
  });

  return article;
};
