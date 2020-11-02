// == Import : npm
import axios from 'axios';

// == Import : local
import {
  GET_CATEGORIES, getCategoriesSuccess, getCategoriesError,
  GET_ARTICLES, getArticlesSuccess, getArticlesError,
} from '../actions';

// == Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_CATEGORIES:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            data: {
              query: `
              {
                getCategories {
                  id
                  name
                  image_url
                }
              }`,
            },
          });
          if (response.data.errors) {
            store.dispatch(getCategoriesError(response.data.errors[0].message));
          }
          else {
            store.dispatch(getCategoriesSuccess(response.data.data.getCategories));
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case GET_ARTICLES:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            data: {
              query: `
              {
                getArticles {
                  id
                  title
                  content
                  excerpt
                  image_url
                  created_at
                  category {
                    id
                    name
                  }
                  user {
                    id
                    firstname
                    lastname
                    avatar_url
                  }
                }
              }
              `,
            },
          });

          if (response.data.errors) {
            store.dispatch(getArticlesError(response.data.errors[0].message));
          }
          else {
            store.dispatch(getArticlesSuccess(response.data.data.getArticles));
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    default:
  }
};

// == Export
export default ajaxMiddleware;
