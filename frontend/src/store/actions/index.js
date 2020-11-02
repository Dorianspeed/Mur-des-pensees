export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR';

export const getCategories = () => ({
  type: GET_CATEGORIES,
});

export const getCategoriesSuccess = (payload) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload,
});

export const getCategoriesError = (payload) => ({
  type: GET_CATEGORIES_ERROR,
  payload,
});

export const getArticles = () => ({
  type: GET_ARTICLES,
});

export const getArticlesSuccess = (payload) => ({
  type: GET_ARTICLES_SUCCESS,
  payload,
});

export const getArticlesError = (payload) => ({
  type: GET_ARTICLES_ERROR,
  payload,
});
