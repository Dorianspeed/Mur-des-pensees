// == Import : local
import {
  ARTICLE_EDITOR_SUBMIT, ARTICLE_EDITOR_SUBMIT_SUCCESS,
  ARTICLE_EDITOR_SUBMIT_ERROR, ARTICLE_EDITOR_INPUT_CHANGE,
} from '../actions/editor';

const initialState = {
  title: '',
  content: '',
  category_id: 0,
  image_url: '',
  error: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ARTICLE_EDITOR_SUBMIT:
      return {
        ...state,
      };
    case ARTICLE_EDITOR_SUBMIT_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ARTICLE_EDITOR_SUBMIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ARTICLE_EDITOR_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
