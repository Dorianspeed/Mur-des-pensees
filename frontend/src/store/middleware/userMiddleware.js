// == Import : npm
import axios from 'axios';
import { toast } from 'react-toastify';

// == Import : local
import { getCategories } from '../actions';
import {
  LOGIN_SUBMIT, loginSubmitSuccess, loginSubmitError, SIGN_UP_SUBMIT, signUpSubmitSuccess,
  signUpSubmitError, LOGOUT_SUBMIT, logoutSubmitSuccess, logoutSubmitError,
  UPDATE_USER_SUBMIT, updateUserSubmitSuccess, updateUserSubmitError,
} from '../actions/user';

// == Middleware
const userMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case LOGIN_SUBMIT:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            data: {
              query: `
                query checkUser($email: EmailAddress!, $password: String!) {
                  checkUser(email: $email, password: $password) {
                    firstname
                    lastname
                    email
                    role
                    created_at
                    avatar_url
                }
              }`,
              variables: {
                email: store.getState().user.email,
                password: store.getState().user.password,
              },
            },
          });
          if (response.data.errors) {
            store.dispatch(loginSubmitError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(loginSubmitSuccess(response.data.data.checkUser));
            toast.success('Authentification réussie');
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case SIGN_UP_SUBMIT:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            data: {
              query: `
              mutation insertUser($firstname: String!, $lastname: String!, $email: EmailAddress!, $password: String!, $confirmed_password: String!, $avatar_url: String!) {
                insertUser(firstname: $firstname, lastname: $lastname, email: $email, password: $password, confirmed_password: $confirmed_password, avatar_url: $avatar_url) {
                  id
                  firstname
                  lastname
                  avatar_url
                  created_at
                }
              }`,
              variables: {
                firstname: store.getState().user.firstname,
                lastname: store.getState().user.lastname,
                email: store.getState().user.email,
                password: store.getState().user.password,
                confirmed_password: store.getState().user.confirmed_password,
                avatar_url: store.getState().user.avatar_url,
              },
            },
          });

          if (response.data.errors) {
            store.dispatch(signUpSubmitError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(signUpSubmitSuccess(response.data.data.insertUser));
            toast.success('Merci pour votre inscription');
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case LOGOUT_SUBMIT:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
              {
                logoutUser
              }`,
            },
          });

          if (response.data.errors) {
            store.dispatch(logoutSubmitError(response.data.errors[0].message));
            toast.error('Une erreur est survenue');
          }
          else {
            store.dispatch(logoutSubmitSuccess(response.data.data));
            toast.success('Déconnexion réussie');
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case UPDATE_USER_SUBMIT:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
              mutation updateUser($firstname: String!, $lastname: String!, $email: EmailAddress!, $avatar_url: String!) {
                updateUser(firstname: $firstname, lastname: $lastname, email: $email, avatar_url: $avatar_url) {
                  id
                  firstname
                  lastname
                  email
                  avatar_url
                  created_at
                }
              }`,
              variables: {
                firstname: store.getState().user.updateUser.firstname,
                lastname: store.getState().user.updateUser.lastname,
                email: store.getState().user.updateUser.email,
                avatar_url: store.getState().user.updateUser.avatar_url,
              },
            },
          });

          if (response.data.errors) {
            store.dispatch(updateUserSubmitError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(updateUserSubmitSuccess(response.data.data.updateUser));
            store.dispatch(getCategories());
            toast.success('Modifications enregistrées');
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
export default userMiddleware;
