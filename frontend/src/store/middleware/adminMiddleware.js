// == Import : npm
import axios from 'axios';
import { toast } from 'react-toastify';

// == Import : local
import {
  GET_PENDING_APPLICATIONS, getPendingApplicationsSuccess, getPendingApplicationsError,
  GET_PENDING_ARTICLES, getPendingArticlesSuccess, getPendingArticlesError,
  VALIDATE_APPLICATION, validateApplicationSuccess, validateApplicationError,
  DECLINE_APPLICATION, declineApplicationSuccess, declineApplicationError,
  VALIDATE_ARTICLE, validateArticleSuccess, validateArticleError,
  DECLINE_ARTICLE, declineArticleSuccess, declineArticleError,
  getPendingArticles, getPendingApplications,
} from '../actions/admin';
import { getArticles } from '../actions';

// == Middleware
const adminMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_PENDING_APPLICATIONS:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
              {
                getPendingApplications {
                  id
                  content
                  created_at
                  user {
                    id
                    firstname
                    lastname
                    avatar_url
                  }
                }
              }`,
            },
          });
          if (response.data.errors) {
            store.dispatch(getPendingApplicationsError(response.data.errors[0].message));
          }
          else {
            store.dispatch(
              getPendingApplicationsSuccess(response.data.data.getPendingApplications),
            );
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case GET_PENDING_ARTICLES:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
              {
                getPendingArticles {
                  id
                  title
                  excerpt
                  content
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
              }`,
            },
          });
          if (response.data.errors) {
            store.dispatch(getPendingArticlesError(response.data.errors[0].message));
          }
          else {
            store.dispatch(getPendingArticlesSuccess(response.data.data.getPendingArticles));
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case VALIDATE_APPLICATION:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
                mutation validateApplication ($application_id: ID!, $user_id: ID!) {
                  validateApplication (application_id: $application_id, user_id: $user_id) {
                    id
                  }
                }`,
              variables: {
                application_id: action.payload.applicationId,
                user_id: action.payload.userId,
              },
            },
          });
          if (response.data.errors) {
            store.dispatch(validateApplicationError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(validateApplicationSuccess());
            store.dispatch(getPendingApplications());
            toast.success('La candidature a bien été validée');
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case DECLINE_APPLICATION:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
                mutation declineApplication ($application_id: ID!, $user_id: ID!) {
                  declineApplication (application_id: $application_id, user_id: $user_id) {
                    id
                  }
                }`,
              variables: {
                application_id: action.payload.applicationId,
                user_id: action.payload.userId,
              },
            },
          });
          if (response.data.errors) {
            store.dispatch(declineApplicationError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(declineApplicationSuccess());
            store.dispatch(getPendingApplications());
            toast.success('La candidature a bien été refusée');
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case VALIDATE_ARTICLE:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
                mutation validateArticle ($id: ID!) {
                  validateArticle (id: $id) {
                    id
                  }
                }`,
              variables: {
                id: action.payload.articleId,
              },
            },
          });
          if (response.data.errors) {
            store.dispatch(validateArticleError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(validateArticleSuccess());
            store.dispatch(getPendingArticles());
            store.dispatch(getArticles());
            toast.success('L\'article a bien été validé');
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case DECLINE_ARTICLE:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
                mutation declineArticle ($id: ID!) {
                  declineArticle (id: $id) {
                    id
                  }
                }`,
              variables: {
                id: action.payload.articleId,
              },
            },
          });
          if (response.data.errors) {
            store.dispatch(declineArticleError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(declineArticleSuccess());
            store.dispatch(getPendingArticles());
            toast.success('L\'article a bien été refusé');
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
export default adminMiddleware;
