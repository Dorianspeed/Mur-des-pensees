// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Articles from '../components/Articles';
import { getArticlesByCategoryId } from '../store/reducers/categories';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    articles: getArticlesByCategoryId(state, id),
  };
};

const mapDispatchToProps = null;

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
