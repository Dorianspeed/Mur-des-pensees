// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from '../components/App';
import { logoutSubmit, clearLogoutSubmitSuccess } from '../store/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  role: state.user.role,
  loading: state.user.logoutLoading,
  logoutSubmitSuccess: state.user.logoutSubmitSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logoutSubmit());
  },

  clearLogoutSubmitSuccess: () => {
    dispatch(clearLogoutSubmitSuccess());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(App);
