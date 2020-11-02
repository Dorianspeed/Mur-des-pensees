export const ARTICLE_EDITOR_SUBMIT = 'ARTICLE_EDITOR_SUBMIT';
export const ARTICLE_EDITOR_SUBMIT_SUCCESS = 'ARTICLE_EDITOR_SUBMIT_SUCCESS';
export const ARTICLE_EDITOR_SUBMIT_ERROR = 'ARTICLE_EDITOR_SUBMIT_ERROR';
export const ARTICLE_EDITOR_INPUT_CHANGE = 'ARTICLE_EDITOR_INPUT_CHANGE';
export const CLEAR_ARTICLE_EDITOR_SUBMIT_SUCCESS = 'CLEAR_ARTICLE_EDITOR_SUBMIT_SUCCESS';

export const APPLICATION_EDITOR_SUBMIT = 'APPLICATION_EDITOR_SUBMIT';
export const APPLICATION_EDITOR_SUBMIT_SUCCESS = 'APPLICATION_EDITOR_SUBMIT_SUCCESS';
export const APPLICATION_EDITOR_SUBMIT_ERROR = 'APPLICATION_EDITOR_SUBMIT_ERROR';
export const APPLICATION_EDITOR_INPUT_CHANGE = 'APPLICATION_EDITOR_INPUT_CHANGE';
export const CLEAR_APPLICATION_EDITOR_SUBMIT_SUCCESS = 'CLEAR_APPLICATION_EDITOR_SUBMIT_SUCCESS';

export const articleEditorSubmit = () => ({
  type: ARTICLE_EDITOR_SUBMIT,
});

export const articleEditorSubmitSuccess = (payload) => ({
  type: ARTICLE_EDITOR_SUBMIT_SUCCESS,
  payload,
});

export const articleEditorSubmitError = (payload) => ({
  type: ARTICLE_EDITOR_SUBMIT_ERROR,
  payload,
});

export const articleEditorInputChange = (payload) => ({
  type: ARTICLE_EDITOR_INPUT_CHANGE,
  payload,
});

export const clearArticleEditorSubmitSuccess = () => ({
  type: CLEAR_ARTICLE_EDITOR_SUBMIT_SUCCESS,
});

export const applicationEditorSubmit = () => ({
  type: APPLICATION_EDITOR_SUBMIT,
});

export const applicationEditorSubmitSuccess = (payload) => ({
  type: APPLICATION_EDITOR_SUBMIT_SUCCESS,
  payload,
});

export const applicationEditorSubmitError = (payload) => ({
  type: APPLICATION_EDITOR_SUBMIT_ERROR,
  payload,
});

export const applicationEditorInputChange = (payload) => ({
  type: APPLICATION_EDITOR_INPUT_CHANGE,
  payload,
});

export const clearApplicationEditorSubmitSuccess = () => ({
  type: CLEAR_APPLICATION_EDITOR_SUBMIT_SUCCESS,
});
