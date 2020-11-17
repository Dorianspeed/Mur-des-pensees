export const GET_FAVORITES = 'GET_FAVORITES';
export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS';
export const GET_FAVORITES_ERROR = 'GET_FAVORITES_ERROR';

export const INSERT_FAVORITE = 'INSERT_FAVORITE';
export const INSERT_FAVORITE_SUCCESS = 'INSERT_FAVORITE_SUCCESS';
export const INSERT_FAVORITE_ERROR = 'INSERT_FAVORITE_ERROR';

export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const DELETE_FAVORITE_SUCCESS = 'DELETE_FAVORITE_SUCCESS';
export const DELETE_FAVORITE_ERROR = 'DELETE_FAVORITE_ERROR';

export const getFavorites = () => ({
  type: GET_FAVORITES,
});

export const getFavoritesSuccess = (payload) => ({
  type: GET_FAVORITES_SUCCESS,
  payload,
});

export const getFavoritesError = (payload) => ({
  type: GET_FAVORITES_ERROR,
  payload,
});

export const insertFavorite = (payload) => ({
  type: INSERT_FAVORITE,
  payload,
});

export const insertFavoriteSuccess = () => ({
  type: INSERT_FAVORITE_SUCCESS,
});

export const insertFavoriteError = (payload) => ({
  type: INSERT_FAVORITE_ERROR,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: DELETE_FAVORITE,
  payload,
});

export const deleteFavoriteSuccess = () => ({
  type: DELETE_FAVORITE_SUCCESS,
});

export const deleteFavoriteError = (payload) => ({
  type: DELETE_FAVORITE_ERROR,
  payload,
});
