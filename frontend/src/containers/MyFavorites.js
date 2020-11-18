// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MyFavorites from '../components/MyFavorites';
import { getArticles } from '../store/actions';
import { getFavorites } from '../store/actions/userAddsToFavorites';

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  loading: state.articles.loading,
  favorites: state.userAddsToFavorites.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles());
  },

  getFavorites: () => {
    dispatch(getFavorites());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(MyFavorites);
