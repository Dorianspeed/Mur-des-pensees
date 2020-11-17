// == import : npm
import axios from 'axios';
import { toast } from 'react-toastify';

// == Import : local
import {
  GET_FAVORITES, getFavoritesSuccess, getFavoritesError,
  INSERT_FAVORITE, insertFavoriteSuccess, insertFavoriteError,
  DELETE_FAVORITE, deleteFavoriteSuccess, deleteFavoriteError,
  getFavorites,
} from '../actions/userAddsToFavorites';

// == Middleware
const userAddsToFavoritesMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_FAVORITES:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: 'true',
            data: {
              query: `
                {
                  getFavoritesByUser {
                    user_id
                    article_id
                  }
                }
              `,
            },
          });

          if (response.data.errors) {
            throw response.data.errors;
          }
          else {
            store.dispatch(getFavoritesSuccess(response.data.data.getFavoritesByUser));
          }
        }

        catch (error) {
          store.dispatch(getFavoritesError(error));
          toast.error('Une erreur est survenue, veuillez réessayer plus tard');
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case INSERT_FAVORITE:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: 'true',
            data: {
              query: `
                mutation insertFavorite ($article_id : ID!) {
                  insertFavorite (article_id: $article_id)
                }`,
              variables: {
                article_id: action.payload,
              },
            },
          });

          if (response.data.errors) {
            store.dispatch(insertFavoriteError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(insertFavoriteSuccess());
            store.dispatch(getFavorites());
            toast.success('Article ajouté aux favoris');
          }
        }

        catch (error) {
          store.dispatch(insertFavoriteError(error));
          toast.error('Une erreur est survenue, veuillez réessayer plus tard.');
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case DELETE_FAVORITE:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: 'true',
            data: {
              query: `
                mutation deleteFavorite ($article_id : ID!) {
                  deleteFavorite (article_id: $article_id)
                }`,
              variables: {
                article_id: action.payload,
              },
            },
          });

          if (response.data.errors) {
            store.dispatch(deleteFavoriteError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(deleteFavoriteSuccess());
            store.dispatch(getFavorites());
            toast.success('Article supprimé des favoris');
          }
        }

        catch (error) {
          store.dispatch(deleteFavoriteError(error));
          toast.error('Une erreur est survenue, veuillez réessayer plus tard.');
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    default:
  }
};

// == Export
export default userAddsToFavoritesMiddleware;
