// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Articles from '../components/Articles';
import { clearArticleEditorSubmitSuccess } from '../store/actions/editor';

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

const mapDispatchToProps = (dispatch) => ({
  clearArticleEditorSubmit: () => {
    dispatch(clearArticleEditorSubmitSuccess());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
