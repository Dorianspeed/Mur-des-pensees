// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from '../components/App';
import { getCategories } from '../store/actions';
import { logoutSubmit } from '../store/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  role: state.user.role,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => {
    dispatch(getCategories());
  },

  handleLogout: () => {
    dispatch(logoutSubmit());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(App);
