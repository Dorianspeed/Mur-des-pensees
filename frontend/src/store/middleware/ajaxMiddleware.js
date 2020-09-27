/* eslint-disable no-restricted-syntax */
// == Import : npm
import axios from 'axios';

// == Import : local
import {
  GET_CATEGORIES, getCategoriesSuccess, getCategoriesError, getArticlesSuccess, getArticlesError,
} from '../actions';

// == Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_CATEGORIES:
      (async () => {
        try {
          const response = await axios({
            url: 'http://54.227.218.109/graphQL',
            method: 'post',
            data: {
              query: `
              {
                getCategories {
                  id
                  name
                  image_url
                  articles {
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
              }`,
            },
          });
          if (response.data.errors) {
            store.dispatch(getCategoriesError(response.data.errors[0].message));
            store.dispatch(getArticlesError(response.data.errors[0].message));
          }
          else {
            store.dispatch(getCategoriesSuccess(response.data.data.getCategories));
            const articles = [];

            for (const category of response.data.data.getCategories) {
              for (const article of category.articles) {
                articles.push(article);
              }
            }

            store.dispatch(getArticlesSuccess(articles));
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
