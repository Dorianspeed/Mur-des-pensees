/* eslint-disable max-classes-per-file */
// == Import : npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

// == Import : local
import 'semantic-ui-css/semantic.min.css';
import About from '../About';
import Article from '../../containers/Article';
import ArticleEditor from '../../containers/ArticleEditor';
import Articles from '../../containers/Articles';
import ArticlesByCategory from '../../containers/ArticlesByCategory';
import Categories from '../../containers/Categories';
import Footer from '../Footer';
import Home from '../Home';
import LegalMentions from '../LegalMentions';
import Login from '../../containers/Login';
import MyProfile from '../../containers/MyProfile';
import NotFound from '../NotFound';
import ResponsiveContainer from '../Header';
import SignUp from '../../containers/SignUp';

// == Composant
const App = ({ getCategories, isLogged, handleLogout }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <ResponsiveContainer isLogged={isLogged} handleLogout={handleLogout}>
        <div style={{ display: 'flex', minHeight: '94vh', flexDirection: 'column' }}>
          <Container style={{ flex: 1 }}>
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/article/:id" component={Article} />
              <Route exact path="/articleeditor" component={ArticleEditor} />
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/articlesbycategory/:id" component={ArticlesByCategory} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/" component={Home} />
              <Route exact path="/legalmentions" component={LegalMentions} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/myprofile" component={MyProfile} />
              <Route exact path="/signup" component={SignUp} />
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Container>
          <Footer isLogged={isLogged} handleLogout={handleLogout} />
        </div>
      </ResponsiveContainer>
    </>
  );
};

App.propTypes = {
  getCategories: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

// == Export
export default App;
