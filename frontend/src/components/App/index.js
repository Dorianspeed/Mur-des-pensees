// == Import : npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';
import About from '../About';
import Article from '../../containers/Article';
import Articles from '../../containers/Articles';
import ArticlesByCategory from '../../containers/ArticlesByCategory';
import Categories from '../../containers/Categories';
import Home from '../Home';
import LegalMentions from '../LegalMentions';
import Login from '../../containers/Login';
// import MyProfile from '../MyProfile';
import SignUp from '../../containers/SignUp';

// == Composant
// eslint-disable-next-line react/prop-types
const App = ({ getCategories }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/article/:id" component={Article} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articlesbycategory/:id" component={ArticlesByCategory} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/" component={Home} />
        <Route exact path="/legalmentions" component={LegalMentions} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/myprofile" component={MyProfile} /> */}
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </>
  );
};

// == Export
export default App;
