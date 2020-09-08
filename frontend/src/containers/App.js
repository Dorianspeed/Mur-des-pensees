// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from '../components/App';
import { getCategories } from '../store/actions';

const mapState = null;

const mapDispatch = (dispatch) => ({
  getCategories: () => {
    dispatch(getCategories());
  },
});

// == Export
export default connect(mapState, mapDispatch)(App);
