export const GET_PENDING_APPLICATIONS = 'GET_PENDING_APPLICATIONS';
export const GET_PENDING_APPLICATIONS_SUCCESS = 'GET_PENDING_APPLICATIONS_SUCCESS';
export const GET_PENDING_APPLICATIONS_ERROR = 'GET_PENDING_APPLICATIONS_ERROR';

export const GET_PENDING_ARTICLES = 'GET_PENDING_ARTICLES';
export const GET_PENDING_ARTICLES_SUCCESS = 'GET_PENDING_ARTICLES_SUCCESS';
export const GET_PENDING_ARTICLES_ERROR = 'GET_PENDING_ARTICLES_ERROR';

export const VALIDATE_APPLICATION = 'VALIDATE_APPLICATION';
export const VALIDATE_APPLICATION_SUCCESS = 'VALIDATE_APPLICATION_SUCCESS';
export const VALIDATE_APPLICATION_ERROR = 'VALIDATE_APPLICATION_ERROR';

export const DECLINE_APPLICATION = 'DECLINE_APPLICATION';
export const DECLINE_APPLICATION_SUCCESS = 'DECLINE_APPLICATION_SUCCESS';
export const DECLINE_APPLICATION_ERROR = 'DECLINE_APPLICATION_ERROR';

export const VALIDATE_ARTICLE = 'VALIDATE_ARTICLE';
export const VALIDATE_ARTICLE_SUCCESS = 'VALIDATE_ARTICLE_SUCCESS';
export const VALIDATE_ARTICLE_ERROR = 'VALIDATE_ARTICLE_ERROR';

export const DECLINE_ARTICLE = 'DECLINE_ARTICLE';
export const DECLINE_ARTICLE_SUCCESS = 'DECLINE_ARTICLE_SUCCESS';
export const DECLINE_ARTICLE_ERROR = 'DECLINE_ARTICLE_ERROR';

export const getPendingApplications = () => ({
  type: GET_PENDING_APPLICATIONS,
});

export const getPendingApplicationsSuccess = (payload) => ({
  type: GET_PENDING_APPLICATIONS_SUCCESS,
  payload,
});

export const getPendingApplicationsError = (payload) => ({
  type: GET_PENDING_APPLICATIONS_ERROR,
  payload,
});

export const getPendingArticles = () => ({
  type: GET_PENDING_ARTICLES,
});

export const getPendingArticlesSuccess = (payload) => ({
  type: GET_PENDING_ARTICLES_SUCCESS,
  payload,
});

export const getPendingArticlesError = (payload) => ({
  type: GET_PENDING_ARTICLES_ERROR,
  payload,
});

export const validateApplication = (payload) => ({
  type: VALIDATE_APPLICATION,
  payload,
});

export const validateApplicationSuccess = () => ({
  type: VALIDATE_APPLICATION_SUCCESS,
});

export const validateApplicationError = (payload) => ({
  type: VALIDATE_APPLICATION_ERROR,
  payload,
});

export const declineApplication = (payload) => ({
  type: DECLINE_APPLICATION,
  payload,
});

export const declineApplicationSuccess = () => ({
  type: DECLINE_APPLICATION_SUCCESS,
});

export const declineApplicationError = (payload) => ({
  type: DECLINE_APPLICATION_ERROR,
  payload,
});

export const validateArticle = (payload) => ({
  type: VALIDATE_ARTICLE,
  payload,
});

export const validateArticleSuccess = () => ({
  type: VALIDATE_ARTICLE_SUCCESS,
});

export const validateArticleError = (payload) => ({
  type: VALIDATE_ARTICLE_ERROR,
  payload,
});

export const declineArticle = (payload) => ({
  type: DECLINE_ARTICLE,
  payload,
});

export const declineArticleSuccess = () => ({
  type: DECLINE_ARTICLE_SUCCESS,
});

export const declineArticleError = (payload) => ({
  type: DECLINE_ARTICLE_ERROR,
  payload,
});
