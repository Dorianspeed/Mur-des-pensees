// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Article from '../components/Article';
import { getArticleById } from '../store/reducers/articles';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    article: getArticleById(state, id),
  };
};

const mapDispatchToProps = null;

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Article);
