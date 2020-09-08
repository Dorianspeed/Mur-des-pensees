// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Articles from '../components/Articles';

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

const mapDispatchToProps = null;

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
