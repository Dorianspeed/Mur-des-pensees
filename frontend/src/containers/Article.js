// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Article from '../components/Article';
import { getArticles } from '../store/actions';
import { getLikes, insertLike, deleteLike } from '../store/actions/userLikesArticle';
import { getFavorites, insertFavorite, deleteFavorite } from '../store/actions/userAddsToFavorites';

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  loading: state.articles.loading,
  likes: state.userLikesArticle.likes,
  favorites: state.userAddsToFavorites.favorites,
  isLogged: state.user.isLogged,
  insertLikeLoading: state.userLikesArticle.loading,
  deleteLikeLoading: state.userLikesArticle.loading,
  insertFavoriteLoading: state.userAddsToFavorites.loading,
  deleteFavoriteLoading: state.userAddsToFavorites.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles());
  },

  getLikes: () => {
    dispatch(getLikes());
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
