// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from '../components/SignUp';
import { signUpSubmit, signUpInputChange } from '../store/actions/user';

const mapStateToProps = (state) => ({
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  email: state.user.email,
  password: state.user.password,
  confirmedPassword: state.user.confirmedPassword,
  avatarUrl: state.user.avatarUrl,
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: () => {
    dispatch(signUpSubmit());
  },

  onInputChange: (data) => {
    dispatch(signUpInputChange(data));
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
