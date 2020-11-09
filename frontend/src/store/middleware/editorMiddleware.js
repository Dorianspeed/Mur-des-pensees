// == Import : npm
import axios from 'axios';
import { toast } from 'react-toastify';

// == Import : local
import {
  ARTICLE_EDITOR_SUBMIT, articleEditorSubmitSuccess, articleEditorSubmitError,
  APPLICATION_EDITOR_SUBMIT, applicationEditorSubmitSuccess, applicationEditorSubmitError,
} from '../actions/editor';

// == Middleware
const editorMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case ARTICLE_EDITOR_SUBMIT:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
                mutation insertArticle ($title: String!, $content: String!, $image_url: String!, $category_id: ID!) {
                  insertArticle(title: $title, content: $content, image_url: $image_url, category_id: $category_id) {
                    id
                    title
                    excerpt
                    content
                    image_url
                    created_at
                    updated_at
                  }
                }`,
              variables: {
                title: store.getState().editor.title,
                content: store.getState().editor.content,
                image_url: store.getState().editor.image_url,
                category_id: store.getState().editor.category_id,
              },
            },
          });

          if (response.data.errors) {
            store.dispatch(articleEditorSubmitError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(articleEditorSubmitSuccess(response.data.data.insertArticle));
            toast.success('Merci pour votre article, il sera traité dans les plus brefs délais');
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    case APPLICATION_EDITOR_SUBMIT:
      (async () => {
        try {
          const response = await axios({
            url: 'http://3.89.123.41/graphQL',
            method: 'post',
            withCredentials: true,
            data: {
              query: `
                mutation insertApplication ($content: String!) {
                  insertApplication (content: $content) {
                    id
                  }
                }`,
              variables: {
                content: store.getState().editor.applicationContent,
              },
            },
          });

          if (response.data.errors) {
            store.dispatch(applicationEditorSubmitError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(applicationEditorSubmitSuccess(response.data.data.insertApplication));
            toast.success('Merci pour votre candidature, elle sera traitée dans les plus brefs délais');
          }
        }

        catch (error) {
          // eslint-disable-next-line no-console
          console.trace(error);
        }
      })();
      break;
    default:
  }
};

// == Export
export default editorMiddleware;
