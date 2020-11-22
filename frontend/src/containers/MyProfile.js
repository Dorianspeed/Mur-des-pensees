// == Import : npm
import { connect } from 'react-redux';

// == Import : local,
import MyProfile from '../components/MyProfile';
import { updateUserSubmit, updateUserInputChange } from '../store/actions/user';

const mapStateToProps = (state) => ({
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  email: state.user.email,
  avatarUrl: state.user.avatar_url,
  createdAt: state.user.created_at,
  updateUser: state.user.updateUser,
  loading: state.user.updateLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: () => {
    dispatch(updateUserSubmit());
  },

  onInputChange: (data) => {
    dispatch(updateUserInputChange(data));
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
