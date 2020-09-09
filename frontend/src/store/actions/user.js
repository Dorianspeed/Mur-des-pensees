export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';
export const LOGIN_SUBMIT_ERROR = 'LOGIN_SUBMIT_ERROR';
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';

export const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';
export const SIGN_UP_SUBMIT_SUCCESS = 'SIGN_UP_SUBMIT_SUCCESS';
export const SIGN_UP_SUBMIT_ERROR = 'SIGN_UP_SUBMIT_ERROR';
export const SIGN_UP_INPUT_CHANGE = 'SIGN_UP_INPUT_CHANGE';

export const LOGOUT_SUBMIT = 'LOGOUT_SUBMIT';
export const LOGOUT_SUBMIT_SUCCESS = 'LOGOUT_SUBMIT_SUCCESS';
export const LOGOUT_SUBMIT_ERROR = 'LOGOUT_SUBMIT_ERROR';

export const UPDATE_USER_SUBMIT = 'UPDATE_USER_SUBMIT';
export const UPDATE_USER_SUBMIT_SUCCESS = 'UPDATE_USER_SUBMIT_SUCCESS';
export const UPDATE_USER_SUBMIT_ERROR = 'UPDATE_USER_SUBMIT_ERROR';
export const UPDATE_USER_INPUT_CHANGE = 'UPDATE_USER_INPUT_CHANGE';

export const loginSubmit = (payload) => ({
  type: LOGIN_SUBMIT,
  payload,
});

export const loginSubmitSuccess = (payload) => ({
  type: LOGIN_SUBMIT_SUCCESS,
  payload,
});

export const loginSubmitError = (payload) => ({
  type: LOGIN_SUBMIT_ERROR,
  payload,
});

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const signUpSubmit = (payload) => ({
  type: SIGN_UP_SUBMIT,
  payload,
});

export const signUpSubmitSuccess = (payload) => ({
  type: SIGN_UP_SUBMIT_SUCCESS,
  payload,
});

export const signUpSubmitError = (payload) => ({
  type: SIGN_UP_SUBMIT_ERROR,
  payload,
});

export const signUpInputChange = (payload) => ({
  type: SIGN_UP_INPUT_CHANGE,
  payload,
});

export const logoutSubmit = () => ({
  type: LOGOUT_SUBMIT,
});

export const logoutSubmitSuccess = () => ({
  type: LOGOUT_SUBMIT_SUCCESS,
});

export const logoutSubmitError = (payload) => ({
  type: LOGOUT_SUBMIT_ERROR,
  payload,
});

export const updateUserSubmit = (payload) => ({
  type: UPDATE_USER_SUBMIT,
  payload,
});

export const updateUserSubmitSuccess = (payload) => ({
  type: UPDATE_USER_SUBMIT_SUCCESS,
  payload,
});

export const updateUserSubmitError = (payload) => ({
  type: UPDATE_USER_SUBMIT_ERROR,
  payload,
});

export const updateUserInputChange = (payload) => ({
  type: UPDATE_USER_INPUT_CHANGE,
  payload,
});
