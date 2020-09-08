// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Categories from '../components/Categories';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = null;

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
