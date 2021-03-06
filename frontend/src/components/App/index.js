// == Import : npm
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// == Import : local
import 'semantic-ui-css/semantic.min.css';
import About from '../About';
import Admin from '../../containers/Admin';
import ApplicationEditor from '../../containers/ApplicationEditor';
import Article from '../../containers/Article';
import ArticleEditor from '../../containers/ArticleEditor';
import Articles from '../../containers/Articles';
import ArticlesByCategory from '../../containers/ArticlesByCategory';
import Categories from '../../containers/Categories';
import Footer from '../Footer';
import Home from '../Home';
import LegalMentions from '../LegalMentions';
import Login from '../../containers/Login';
import MyArticles from '../../containers/MyArticles';
import MyFavorites from '../../containers/MyFavorites';
import MyProfile from '../../containers/MyProfile';
import NotFound from '../NotFound';
import ResponsiveContainer from '../Header';
import SignUp from '../../containers/SignUp';

// == Composant
const App = ({
  isLogged, handleLogout, role, loading, logoutSubmitSuccess, clearLogoutSubmitSuccess,
}) => {
  useEffect(() => {
    clearLogoutSubmitSuccess();
  }, [logoutSubmitSuccess]);

  return (
    <>
      {logoutSubmitSuccess && <Redirect to="/" />}
      {/* eslint-disable-next-line max-len */}
      <ResponsiveContainer isLogged={isLogged} handleLogout={handleLogout} role={role} loading={loading}>
        <div style={{ display: 'flex', minHeight: '94vh', flexDirection: 'column' }}>
          <ToastContainer
            transition={Zoom}
            autoClose={3000}
            closeOnClick
            draggable
            pauseOnHover={false}
          />
          <Container style={{ flex: 1 }}>
            <Switch>
              <Route exact path="/about" component={About} />
              {role === 'chief_editor' && (<Route exact path="/admin" component={Admin} />)}
              {role === 'reader' && (<Route exact path="/application-editor" component={ApplicationEditor} />)}
              <Route exact path="/article/:slug" component={Article} />
              {role.includes('editor') && (<Route exact path="/article-editor" component={ArticleEditor} />)}
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/category/:slug" component={ArticlesByCategory} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/" component={Home} />
              <Route exact path="/legal-mentions" component={LegalMentions} />
              <Route exact path="/login">
                {isLogged ? <Redirect to="/" /> : <Login />}
              </Route>
              {isLogged && (<Route exact path="/my-articles" component={MyArticles} />)}
              {isLogged && (<Route exact path="/my-favorites" component={MyFavorites} />)}
              {isLogged && (<Route exact path="/my-profile" component={MyProfile} />)}
              <Route exact path="/signup">
                {isLogged ? <Redirect to="/" /> : <SignUp />}
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Container>
          <Footer isLogged={isLogged} handleLogout={handleLogout} role={role} />
        </div>
      </ResponsiveContainer>
    </>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  logoutSubmitSuccess: PropTypes.bool.isRequired,
  clearLogoutSubmitSuccess: PropTypes.func.isRequired,
};

// == Export
export default App;
