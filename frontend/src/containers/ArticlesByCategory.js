// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Articles from '../components/Articles';
import { getArticlesByCategoryId } from '../store/reducers/categories';
import { clearArticleEditorSubmitSuccess } from '../store/actions/editor';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    articles: getArticlesByCategoryId(state, id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearArticleEditorSubmit: () => {
    dispatch(clearArticleEditorSubmitSuccess());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
