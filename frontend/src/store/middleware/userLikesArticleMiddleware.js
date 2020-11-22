// == Import : npm
import axios from 'axios';
import { toast } from 'react-toastify';

// == Import : local
import {
  GET_LIKES, getLikesSuccess, getLikesError,
  INSERT_LIKE, insertLikeSuccess, insertLikeError,
  DELETE_LIKE, deleteLikeSuccess, deleteLikeError,
  getLikes,
} from '../actions/userLikesArticle';
import { getArticles } from '../actions';

// == Middleware
const userLikesArticleMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_LIKES:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: 'true',
            data: {
              query: `
                {
                  getLikesByUser {
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
            store.dispatch(getLikesSuccess(response.data.data.getLikesByUser));
          }
        }

        catch (error) {
          store.dispatch(getLikesError(error));
          toast.error('Une erreur est survenue, veuillez réessayer plus tard.');
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case INSERT_LIKE:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
                mutation insertLike ($article_id: ID!) {
                  insertLike (article_id: $article_id)
                }`,
              variables: {
                article_id: action.payload,
              },
            },
          });

          if (response.data.errors) {
            store.dispatch(insertLikeError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(insertLikeSuccess());
            store.dispatch(getArticles());
            store.dispatch(getLikes());
            toast.success('Mention "j\'aime" ajoutée.');
          }
        }

        catch (error) {
          store.dispatch(insertLikeError(error));
          toast.error('Une erreur est survenue, veuillez réessayer plus tard.');
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case DELETE_LIKE:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
                mutation deleteLike ($article_id: ID!) {
                  deleteLike (article_id: $article_id)
                }`,
              variables: {
                article_id: action.payload,
              },
            },
          });

          if (response.data.errors) {
            store.dispatch(deleteLikeError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(deleteLikeSuccess());
            store.dispatch(getArticles());
            store.dispatch(getLikes());
            toast.success('Mention "j\'aime" supprimée.');
          }
        }

        catch (error) {
          store.dispatch(deleteLikeError(error));
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
export default userLikesArticleMiddleware;
