// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ArticlesByCategory from '../components/ArticlesByCategory';

const getArticlesByCategoryId = (state, id) => {
  const articles = state.articles.articles.filter((element) => element.category.id === id);

  return articles;
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    articles: getArticlesByCategoryId(state, id),
  };
};

const mapDispatchToProps = null;

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ArticlesByCategory);
