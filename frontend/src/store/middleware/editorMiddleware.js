// == Import : npm
import axios from 'axios';
import { toast } from 'react-toastify';

// == Import : local
import {
  ARTICLE_EDITOR_SUBMIT, articleEditorSubmitSuccess, articleEditorSubmitError,
} from '../actions/editor';

// == Middleware
const editorMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case ARTICLE_EDITOR_SUBMIT:
      (async () => {
        try {
          const response = await axios({
            url: 'http://localhost:3000/graphQL',
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
                title: store.getState().title,
                content: store.getState().content,
                image_url: store.getState().image_url,
                category_id: store.getState().category_id,
              },
            },
          });

          if (response.data.errors) {
            store.dispatch(articleEditorSubmitError(response.data.errors[0].message));
            toast.error(response.data.errors[0].message);
          }
          else {
            store.dispatch(articleEditorSubmitSuccess(response.data.data.insertArticle));
            toast.success('Merci pour votre article');
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
