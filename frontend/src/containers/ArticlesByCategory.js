// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ArticlesByCategory from '../components/ArticlesByCategory';
import { getArticles } from '../store/actions';

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  loading: state.articles.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ArticlesByCategory);
