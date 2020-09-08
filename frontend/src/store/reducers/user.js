// == Import : local
import {
  LOGIN_SUBMIT, LOGIN_SUBMIT_SUCCESS, LOGIN_SUBMIT_ERROR, LOGIN_INPUT_CHANGE,
} from '../actions/user';

const initialState = {
  email: '',
  password: '',
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
    default:
      return state;
  }
};
