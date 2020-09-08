// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './styles.scss';
import About from '../About';
import Article from '../Article';
import Articles from '../Articles';
import ArticlesByCategory from '../ArticlesByCategory';
import Categories from '../Categories';
import Home from '../Home';
import LegalMentions from '../LegalMentions';
import Login from '../Login';
import MyProfile from '../MyProfile';
import SignUp from '../SignUp';

// == Composant
const App = () => (
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
      <Route exact path="/myprofile" component={MyProfile} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </>
);

// == Export
export default App;
