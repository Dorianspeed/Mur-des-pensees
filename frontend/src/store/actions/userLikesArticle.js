export const INSERT_LIKE = 'INSERT_LIKE';
export const INSERT_LIKE_SUCCESS = 'INSERT_LIKE_SUCCESS';
export const INSERT_LIKE_ERROR = 'INSERT_LIKE_ERROR';

export const DELETE_LIKE = 'DELETE_LIKE';
export const DELETE_LIKE_SUCCESS = 'DELETE_LIKE_SUCCESS';
export const DELETE_LIKE_ERROR = 'DELETE_LIKE_ERROR';

export const insertLike = (payload) => ({
  type: INSERT_LIKE,
  payload,
});

export const insertLikeSuccess = () => ({
  type: INSERT_LIKE_SUCCESS,
});

export const insertLikeError = (payload) => ({
  type: INSERT_LIKE_ERROR,
  payload,
});

export const deleteLike = (payload) => ({
  type: DELETE_LIKE,
  payload,
});

export const deleteLikeSuccess = () => ({
  type: DELETE_LIKE_SUCCESS,
});

export const deleteLikeError = (payload) => ({
  type: DELETE_LIKE_ERROR,
  payload,
});
