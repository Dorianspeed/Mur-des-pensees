// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Article from '../components/Article';
import { getArticles } from '../store/actions';
import { insertLike, deleteLike } from '../store/actions/userLikesArticle';
import { getFavorites, insertFavorite, deleteFavorite } from '../store/actions/userAddsToFavorites';

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  loading: state.articles.loading,
  favorites: state.userAddsToFavorites.favorites,
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

  getFavorites: () => {
    dispatch(getFavorites());
  },

  insertFavorite: (id) => {
    dispatch(insertFavorite(id));
  },

  deleteFavorite: (id) => {
    dispatch(deleteFavorite(id));
  },

});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Article);
