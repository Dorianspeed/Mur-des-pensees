// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Admin from '../components/Admin';
import {
  getPendingApplications, getPendingArticles, validateApplication, declineApplication,
  validateArticle, declineArticle,
} from '../store/actions/admin';

const mapStateToProps = (state) => ({
  pendingApplications: state.admin.pendingApplications,
  pendingArticles: state.admin.pendingArticles,
});

const mapDispatchToProps = (dispatch) => ({
  getPendingApplications: () => {
    dispatch(getPendingApplications());
  },

  getPendingArticles: () => {
    dispatch(getPendingArticles());
  },

  validateApplication: (payload) => {
    dispatch(validateApplication(payload));
  },

  declineApplication: (payload) => {
    dispatch(declineApplication(payload));
  },

  validateArticle: (payload) => {
    dispatch(validateArticle(payload));
  },

  declineArticle: (payload) => {
    dispatch(declineArticle(payload));
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
