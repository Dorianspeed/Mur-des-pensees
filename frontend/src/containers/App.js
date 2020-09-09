// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from '../components/App';
import { getCategories } from '../store/actions';
// import { logout } from '../store/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => {
    dispatch(getCategories());
  },

  handleLogout: () => {
    // dispatch(logout());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(App);
