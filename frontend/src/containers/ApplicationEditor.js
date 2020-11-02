// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ApplicationEditor from '../components/ApplicationEditor';
import { applicationEditorSubmit, applicationEditorInputChange } from '../store/actions/editor';

const mapStateToProps = (state) => ({
  content: state.editor.applicationContent,
  applicationEditorSubmitSuccess: state.editor.applicationEditorSubmitSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: () => {
    dispatch(applicationEditorSubmit());
  },

  onInputChange: (data) => {
    dispatch(applicationEditorInputChange(data));
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationEditor);
