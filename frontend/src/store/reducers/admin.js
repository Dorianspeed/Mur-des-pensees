// == Import : local
import {
  GET_PENDING_APPLICATIONS, GET_PENDING_APPLICATIONS_SUCCESS, GET_PENDING_APPLICATIONS_ERROR,
  GET_PENDING_ARTICLES, GET_PENDING_ARTICLES_SUCCESS, GET_PENDING_ARTICLES_ERROR,
  VALIDATE_APPLICATION, VALIDATE_APPLICATION_SUCCESS, VALIDATE_APPLICATION_ERROR,
  DECLINE_APPLICATION, DECLINE_APPLICATION_SUCCESS, DECLINE_APPLICATION_ERROR,
  VALIDATE_ARTICLE, VALIDATE_ARTICLE_SUCCESS, VALIDATE_ARTICLE_ERROR,
  DECLINE_ARTICLE, DECLINE_ARTICLE_SUCCESS, DECLINE_ARTICLE_ERROR,
} from '../actions/admin';

const initialState = {
  pendingApplications: [],
  pendingArticles: [],
  loadingApplications: true,
  loadingArticles: true,
  loading: false,
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PENDING_APPLICATIONS:
      return {
        ...state,
      };
    case GET_PENDING_APPLICATIONS_SUCCESS:
      return {
        ...state,
        pendingApplications: [...action.payload],
        loadingApplications: false,
        error: '',
      };
    case GET_PENDING_APPLICATIONS_ERROR:
      return {
        ...state,
        loadingApplications: false,
        error: action.payload,
      };
    case GET_PENDING_ARTICLES:
      return {
        ...state,
      };
    case GET_PENDING_ARTICLES_SUCCESS:
      return {
        ...state,
        pendingArticles: [...action.payload],
        loadingArticles: false,
        error: '',
      };
    case GET_PENDING_ARTICLES_ERROR:
      return {
        ...state,
        loadingArticles: false,
        error: action.payload,
      };
    case VALIDATE_APPLICATION:
      return {
        ...state,
        loading: true,
      };
    case VALIDATE_APPLICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case VALIDATE_APPLICATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DECLINE_APPLICATION:
      return {
        ...state,
        loading: true,
      };
    case DECLINE_APPLICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case DECLINE_APPLICATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case VALIDATE_ARTICLE:
      return {
        ...state,
        loading: true,
      };
    case VALIDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case VALIDATE_ARTICLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DECLINE_ARTICLE:
      return {
        ...state,
        loading: true,
      };
    case DECLINE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case DECLINE_ARTICLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
