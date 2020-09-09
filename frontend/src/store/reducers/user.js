// == Import : local
import {
  LOGIN_SUBMIT, LOGIN_SUBMIT_SUCCESS, LOGIN_SUBMIT_ERROR, LOGIN_INPUT_CHANGE, SIGN_UP_SUBMIT,
  SIGN_UP_SUBMIT_SUCCESS, SIGN_UP_SUBMIT_ERROR, SIGN_UP_INPUT_CHANGE, LOGOUT_SUBMIT,
  LOGOUT_SUBMIT_SUCCESS, LOGOUT_SUBMIT_ERROR, UPDATE_USER_SUBMIT, UPDATE_USER_SUBMIT_SUCCESS,
  UPDATE_USER_SUBMIT_ERROR, UPDATE_USER_INPUT_CHANGE,
} from '../actions/user';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmed_password: '',
  avatar_url: '',
  created_at: '',
  isLogged: false,
  updateUser: {},
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
        ...action.payload,
        password: '',
        isLogged: true,
        error: '',
        updateUser: {
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
        avatar_url: '',
        error: '',
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
    case LOGOUT_SUBMIT:
      return {
        ...state,
      };
    case LOGOUT_SUBMIT_SUCCESS:
      return {
        ...state,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmedPassword: '',
        avatar_url: '',
        created_at: '',
        isLogged: false,
        error: '',
      };
    case LOGOUT_SUBMIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_USER_SUBMIT:
      return {
        ...state,
      };
    case UPDATE_USER_SUBMIT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        updateUser: {
          ...action.payload,
        },
      };
    case UPDATE_USER_SUBMIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_USER_INPUT_CHANGE:
      return {
        ...state,
        updateUser: {
          ...state.updateUser,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
