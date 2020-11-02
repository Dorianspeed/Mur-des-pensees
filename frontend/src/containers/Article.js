// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Article from '../components/Article';

const getArticleById = (state, id) => {
  const article = state.articles.articles.find((element) => element.id === id);

  return article;
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    article: getArticleById(state, id),
  };
};

const mapDispatchToProps = null;

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Article);
