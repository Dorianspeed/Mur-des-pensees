// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Articles from '../components/Articles';

const mapState = (state) => ({
  articles: state.articles.articles,
});

const mapDispatch = null;

// == Export
export default connect(mapState, mapDispatch)(Articles);
