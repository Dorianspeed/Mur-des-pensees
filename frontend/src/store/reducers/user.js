// == Import : local
import {
  LOGIN_SUBMIT, LOGIN_SUBMIT_SUCCESS, LOGIN_SUBMIT_ERROR, LOGIN_INPUT_CHANGE, SIGN_UP_SUBMIT,
  SIGN_UP_SUBMIT_SUCCESS, SIGN_UP_SUBMIT_ERROR, SIGN_UP_INPUT_CHANGE,
} from '../actions/user';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmedPassword: '',
  avatar_url: '',
  isLogged: false,
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {
        ...state,
      };
    case LOGIN_SUBMIT_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: true,
        error: '',
        user: {
          ...action.payload,
        },
      };
    case LOGIN_SUBMIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case SIGN_UP_SUBMIT:
      return {
        ...state,
      };
    case SIGN_UP_SUBMIT_SUCCESS:
      return {
        ...state,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmedPassword: '',
        avatarUrl: '',
      };
    case SIGN_UP_SUBMIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SIGN_UP_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
