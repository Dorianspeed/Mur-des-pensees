// == Import : npm
import axios from 'axios';

// == Import : local
import {
  LOGIN_SUBMIT, loginSubmitSuccess, loginSubmitError, SIGN_UP_SUBMIT, signUpSubmitSuccess,
  signUpSubmitError, LOGOUT_SUBMIT, logoutSubmitSuccess, logoutSubmitError,
} from '../actions/user';

// == Middleware
const userMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case LOGIN_SUBMIT:
      (async () => {
        try {
          const response = await axios({
            url: 'http://localhost:3000/graphQL',
            method: 'post',
            data: {
              query: `
                query checkUser($email: EmailAddress!, $password: String!) {
                  checkUser(email: $email, password: $password) {
                    id
                    firstname
                    lastname
                    email
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
          }
          else {
            store.dispatch(loginSubmitSuccess(response.data.data.checkUser));
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
            url: 'http://localhost:3000/graphQL',
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
                confirmed_password: store.getState().user.confirmedPassword,
                avatar_url: store.getState().user.avatarUrl,
              },
            },
          });

          if (response.data.errors) {
            store.dispatch(signUpSubmitError(response.data.errors[0].message));
          }
          else {
            store.dispatch(signUpSubmitSuccess(response.data.data));
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
            url: 'http://localhost:3000/graphQL',
            method: 'post',
            data: {
              query: `
              {
                logoutUser
              }`,
            },
          });

          if (response.data.errors) {
            store.dispatch(logoutSubmitError(response.data.errors[0].message));
          }
          else {
            store.dispatch(logoutSubmitSuccess(response.data.data));
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
