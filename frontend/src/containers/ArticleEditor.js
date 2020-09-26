// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ArticleEditor from '../components/ArticleEditor';
import { articleEditorSubmit, articleEditorInputChange } from '../store/actions/editor';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  title: state.editor.title,
  content: state.editor.content,
  categoryId: state.editor.category_id,
  articleEditorSubmitSuccess: state.editor.articleEditorSubmitSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: () => {
    dispatch(articleEditorSubmit());
  },

  onInputChange: (data) => {
    dispatch(articleEditorInputChange(data));
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);
