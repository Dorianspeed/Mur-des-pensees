// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Articles from '../components/Articles';
import { getArticles } from '../store/actions';
import { clearArticleEditorSubmitSuccess, clearApplicationEditorSubmitSuccess } from '../store/actions/editor';

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles());
  },

  clearArticleEditorSubmit: () => {
    dispatch(clearArticleEditorSubmitSuccess());
  },

  clearApplicationEditorSubmitSuccess: () => {
    dispatch(clearApplicationEditorSubmitSuccess());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
