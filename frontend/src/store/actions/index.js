export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';

export const getCategories = (payload) => ({
  type: GET_CATEGORIES,
  payload,
});

export const getCategoriesSuccess = (payload) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload,
});

export const getCategoriesError = (payload) => ({
  type: GET_CATEGORIES_ERROR,
  payload,
});
