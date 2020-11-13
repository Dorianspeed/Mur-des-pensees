// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Article from '../components/Article';
import { getArticles } from '../store/actions';
import { insertLike, deleteLike } from '../store/actions/userLikesArticle';

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  loading: state.articles.loading,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles());
  },

  insertLike: (id) => {
    dispatch(insertLike(id));
  },

  deleteLike: (id) => {
    dispatch(deleteLike(id));
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Article);
