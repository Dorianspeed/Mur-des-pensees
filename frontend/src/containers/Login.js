// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Login from '../components/Login';
import { loginSubmit, loginInputChange, clearSignUpSubmitSuccess } from '../store/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: () => {
    dispatch(loginSubmit());
  },

  onInputChange: (data) => {
    dispatch(loginInputChange(data));
  },

  clearSignUpSubmit: () => {
    dispatch(clearSignUpSubmitSuccess());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Login);
