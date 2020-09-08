// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from '../components/App';
import { getCategories } from '../store/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => {
    dispatch(getCategories());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(App);
