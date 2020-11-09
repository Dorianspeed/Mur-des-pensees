// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ArticleEditor from '../components/ArticleEditor';
import { articleEditorSubmit, articleEditorInputChange } from '../store/actions/editor';
import { getCategories } from '../store/actions';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  title: state.editor.title,
  content: state.editor.content,
  categoryId: state.editor.category_id,
  loading: state.editor.loading,
  articleEditorSubmitSuccess: state.editor.articleEditorSubmitSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => {
    dispatch(getCategories());
  },

  onFormSubmit: () => {
    dispatch(articleEditorSubmit());
  },

  onInputChange: (data) => {
    dispatch(articleEditorInputChange(data));
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);
