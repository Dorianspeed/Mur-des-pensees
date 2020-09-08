// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Categories from '../components/Categories';

const mapState = (state) => ({
  categories: state.categories.categories,
});

const mapDispatch = null;

// == Export
export default connect(mapState, mapDispatch)(Categories);
