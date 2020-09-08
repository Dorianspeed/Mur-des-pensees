// == Import : npm
import axios from 'axios';

// == Import : local
import { LOGIN_SUBMIT, loginSubmitSuccess, loginSubmitError } from '../actions/user';

// == Middleware
const userMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case LOGIN_SUBMIT:
      // eslint-disable-next-line no-case-declarations
      const { user } = store.getState();
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
                email: user.email,
                password: user.password,
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
    default:
  }
};

// == Export
export default userMiddleware;
