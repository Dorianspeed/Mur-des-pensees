// == Import : local
import {
  LOGIN_SUBMIT, LOGIN_SUBMIT_SUCCESS, LOGIN_SUBMIT_ERROR, LOGIN_INPUT_CHANGE, SIGN_UP_SUBMIT,
  SIGN_UP_SUBMIT_SUCCESS, SIGN_UP_SUBMIT_ERROR, SIGN_UP_INPUT_CHANGE, LOGOUT_SUBMIT,
  LOGOUT_SUBMIT_SUCCESS, LOGOUT_SUBMIT_ERROR, UPDATE_USER_SUBMIT, UPDATE_USER_SUBMIT_SUCCESS,
  UPDATE_USER_SUBMIT_ERROR, UPDATE_USER_INPUT_CHANGE, CLEAR_SIGN_UP_SUBMIT_SUCCESS,
  CLEAR_LOGOUT_SUBMIT_SUCCESS,
} from '../actions/user';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmed_password: '',
  role: '',
  avatar_url: '',
  created_at: '',
  loading: false,
  logoutLoading: false,
  updateLoading: false,
  isLogged: false,
  updateUser: {},
  error: '',
  signUpSubmitSuccess: false,
  logoutSubmitSuccess: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUBMIT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        password: '',
        loading: false,
        isLogged: true,
        error: '',
        updateUser: {
          ...action.payload,
        },
      };
    case LOGIN_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
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
        loading: true,
      };
    case SIGN_UP_SUBMIT_SUCCESS:
      return {
        ...state,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmed_password: '',
        avatar_url: '',
        loading: false,
        error: '',
        signUpSubmitSuccess: true,
      };
    case SIGN_UP_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SIGN_UP_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_SIGN_UP_SUBMIT_SUCCESS:
      return {
        ...state,
        signUpSubmitSuccess: false,
      };
    case LOGOUT_SUBMIT:
      return {
        ...state,
        logoutLoading: true,
      };
    case LOGOUT_SUBMIT_SUCCESS:
      return {
        ...state,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmed_password: '',
        role: '',
        avatar_url: '',
        created_at: '',
        logoutLoading: false,
        isLogged: false,
        error: '',
        logoutSubmitSuccess: true,
      };
    case LOGOUT_SUBMIT_ERROR:
      return {
        ...state,
        logoutLoading: false,
        error: action.payload,
      };
    case CLEAR_LOGOUT_SUBMIT_SUCCESS:
      return {
        ...state,
        logoutSubmitSuccess: false,
      };
    case UPDATE_USER_SUBMIT:
      return {
        ...state,
        updateLoading: true,
      };
    case UPDATE_USER_SUBMIT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        updateUser: {
          ...action.payload,
        },
        updateLoading: false,
        error: '',
      };
    case UPDATE_USER_SUBMIT_ERROR:
      return {
        ...state,
        updateLoading: false,
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
