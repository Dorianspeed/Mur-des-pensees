// == Import : npm
import axios from 'axios';

// == Import : local
import { GET_CATEGORIES, getCategoriesSuccess, getCategoriesError } from '../actions';

// == Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_CATEGORIES:
      (async () => {
        try {
          const response = await axios({
            url: 'http://localhost:3000/graphQL',
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
                    excerpt
                    created_at
                    user {
                      id
                      firstname
                      lastname
                      created_at
                    }
                  }
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
    default:
  }
};

// == Export
export default ajaxMiddleware;
