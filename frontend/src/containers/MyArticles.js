// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MyArticles from '../components/MyArticles';
import { getArticles } from '../store/actions';

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  loading: state.articles.loading,
  userId: state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => {
    dispatch(getArticles());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(MyArticles);
