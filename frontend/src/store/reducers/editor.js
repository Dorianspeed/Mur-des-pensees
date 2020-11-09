// == Import : local
import {
  ARTICLE_EDITOR_SUBMIT, ARTICLE_EDITOR_SUBMIT_SUCCESS,
  ARTICLE_EDITOR_SUBMIT_ERROR, ARTICLE_EDITOR_INPUT_CHANGE,
  CLEAR_ARTICLE_EDITOR_SUBMIT_SUCCESS,
  APPLICATION_EDITOR_SUBMIT, APPLICATION_EDITOR_SUBMIT_SUCCESS,
  APPLICATION_EDITOR_SUBMIT_ERROR,
  APPLICATION_EDITOR_INPUT_CHANGE,
  CLEAR_APPLICATION_EDITOR_SUBMIT_SUCCESS,
} from '../actions/editor';

const initialState = {
  title: '',
  content: '',
  category_id: 0,
  image_url: '',
  applicationContent: '',
  loading: false,
  error: '',
  articleEditorSubmitSuccess: false,
  applicationEditorSubmitSuccess: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ARTICLE_EDITOR_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case ARTICLE_EDITOR_SUBMIT_SUCCESS:
      return {
        ...state,
        title: '',
        content: '',
        category_id: '',
        image_url: '',
        loading: false,
        error: '',
        articleEditorSubmitSuccess: true,
      };
    case ARTICLE_EDITOR_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ARTICLE_EDITOR_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_ARTICLE_EDITOR_SUBMIT_SUCCESS:
      return {
        ...state,
        articleEditorSubmitSuccess: false,
      };
    case APPLICATION_EDITOR_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case APPLICATION_EDITOR_SUBMIT_SUCCESS:
      return {
        ...state,
        applicationContent: '',
        loading: false,
        error: '',
        applicationEditorSubmitSuccess: true,
      };
    case APPLICATION_EDITOR_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case APPLICATION_EDITOR_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_APPLICATION_EDITOR_SUBMIT_SUCCESS:
      return {
        ...state,
        applicationEditorSubmitSuccess: false,
      };
    default:
      return state;
  }
};
