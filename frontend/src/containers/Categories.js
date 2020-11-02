// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Categories from '../components/Categories';
import { getCategories } from '../store/actions';

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => {
    dispatch(getCategories());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
