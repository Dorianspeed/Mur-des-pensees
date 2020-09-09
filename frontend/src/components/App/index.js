/* eslint-disable max-classes-per-file */
// == Import : npm
import React, { useEffect, Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createMedia } from '@artsy/fresnel';
import {
  Button, Icon, Image, Segment, Menu, Container, Sidebar, Header, Visibility,
} from 'semantic-ui-react';

// == Import : local
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';
import About from '../About';
import Article from '../../containers/Article';
import Articles from '../../containers/Articles';
import ArticlesByCategory from '../../containers/ArticlesByCategory';
import Categories from '../../containers/Categories';
import Footer from '../Footer';
import Home from '../Home';
import LegalMentions from '../LegalMentions';
import Login from '../../containers/Login';
// import MyProfile from '../MyProfile';
import SignUp from '../../containers/SignUp';

// == Composant
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1192,
  },
});

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image
      src="/images/logo-white.png"
      size={mobile ? 'small' : 'medium'}
      style={{
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
      centered
    />
    <Header
      as="h1"
      content="Mur des Pensées"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
      }}
    />
    <Header
      as="h2"
      content="Lire, Ecrire, Partager !"
      inverted
      style={{
        fontSize: mobile ? '1.3em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button as={NavLink} to="/categories" inverted animated size="huge">
      <Button.Content visible>
        Explorer
      </Button.Content>
      <Button.Content hidden>
        <Icon color="black" name="sign-in" />
      </Button.Content>
    </Button>

  </Container>
);

HomepageHeading.propTypes = {
  // eslint-disable-next-line react/require-default-props
  mobile: PropTypes.bool,
};

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hideFixedMenu = () => this.setState({ fixed: false })

  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    // eslint-disable-next-line react/prop-types
    const { children, isLogged, handleLogout } = this.props;
    const { fixed } = this.state;
    const path = window.location.pathname;
    const minHeight = (path === '/') ? 700 : null;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              compact
            >
              <Container>
                <Menu.Item>
                  <Image src={!fixed ? '/images/logo-white-text.png' : '/images/logo-black-text.png'} size="tiny" />
                </Menu.Item>
                <Menu.Item as={NavLink} to="/" exact>
                  <Icon name="home" />
                  Accueil
                </Menu.Item>
                <Menu.Item as={NavLink} to="/articles">
                  <Icon name="list" />
                  Articles
                </Menu.Item>
                <Menu.Item as={NavLink} to="/categories">
                  <Icon name="tag" />
                  Catégories
                </Menu.Item>
                {isLogged && (
                  <>
                    <Menu.Item as={NavLink} to="/ecrirearticle">
                      <Icon name="pencil" />
                      Rédiger un article
                    </Menu.Item>
                    <Menu.Item position="right">
                      <Button as={NavLink} to="/myprofil" inverted={!fixed} color={fixed ? 'black' : null}>
                        Mon profil
                      </Button>
                      <Button as={NavLink} to="/" inverted={!fixed} color="red" style={{ marginLeft: '0.5em' }} onClick={handleLogout}>
                        Se déconnecter
                      </Button>
                    </Menu.Item>
                  </>
                )}
                {!isLogged && (
                  <Menu.Item position="right">
                    <Button as={NavLink} to="/login" inverted={!fixed} color={fixed ? 'black' : null}>
                      Se connecter
                    </Button>
                    <Button as={NavLink} to="/signup" inverted={!fixed} color="green" style={{ marginLeft: '0.5em' }}>
                      S'inscrire
                    </Button>
                  </Menu.Item>
                )}
              </Container>
            </Menu>
            {(path === '/') ? <HomepageHeading /> : null}
          </Segment>
        </Visibility>
        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    // eslint-disable-next-line react/prop-types
    const { children, isLogged, handleLogout } = this.props;
    const { sidebarOpened } = this.state;
    const path = window.location.pathname;
    const minHeight = (path === '/') ? 350 : null;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            width="thin"
          >
            <Menu.Item>
              <Image src="/images/logo-white-text.png" size="tiny" />
            </Menu.Item>
            <Menu.Item as={NavLink} to="/" exact>
              <Icon name="home" />
              Accueil
            </Menu.Item>
            <Menu.Item as={NavLink} to="/articles">
              <Icon name="list" />
              Articles
            </Menu.Item>
            <Menu.Item as={NavLink} to="/categories">
              <Icon name="tag" />
              Catégories
            </Menu.Item>
            {!isLogged && (
              <>
                <Menu.Item as={NavLink} to="/login">
                  <Icon name="sign-in" />
                  Se connecter
                </Menu.Item>
                <Menu.Item as={NavLink} to="/signup">
                  <Icon name="user plus" />
                  S'inscrire
                </Menu.Item>
              </>
            )}
            {isLogged && (
              <>
                <Menu.Item as={NavLink} to="/ecrirearticle">
                  <Icon name="pencil" />
                  Rédiger un article
                </Menu.Item>
                <Menu.Item as={NavLink} to="/myprofile">
                  <Icon name="user circle" />
                  Mon profil
                </Menu.Item>
                <Menu.Item as={NavLink} to="/" onClick={handleLogout}>
                  <Icon name="sign-out" />
                  Se déconnecter
                </Menu.Item>
              </>
            )}
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="tiny">
                  <Menu.Item onClick={this.handleToggle} fitted>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item>
                    <Image src="/images/logo-white-text.png" wrapped size="tiny" style={{ marginLeft: '-0.4em' }} />
                  </Menu.Item>
                  {!isLogged && (
                    <Menu.Item position="right" fitted>
                      <Button as={NavLink} to="/login" inverted style={{ marginLeft: '-1.2em' }}>
                        Se connecter
                      </Button>
                      <Button as={NavLink} to="/signup" inverted color="green" style={{ marginLeft: '0.5em' }}>
                        S'inscrire
                      </Button>
                    </Menu.Item>
                  )}
                  {isLogged && (
                    <Menu.Item position="right" fitted>
                      <Button as={NavLink} to="/myprofile" inverted style={{ marginLeft: '-1em', paddingLeft: '1em', paddingRight: '1em' }}>
                        Mon profil
                      </Button>
                      <Button as={NavLink} to="/" inverted color="red" style={{ marginLeft: '0.5em', paddingLeft: '1em', paddingRight: '1em' }} onClick={handleLogout}>
                        Se déconnecter
                      </Button>
                    </Menu.Item>
                  )}
                </Menu>
              </Container>
              {(path === '/') ? <HomepageHeading mobile /> : null}
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};

// eslint-disable-next-line react/prop-types
const ResponsiveContainer = ({ children, isLogged, handleLogout }) => (
  <MediaContextProvider>
    <DesktopContainer isLogged={isLogged} handleLogout={handleLogout}>{children}</DesktopContainer>
    <MobileContainer isLogged={isLogged} handleLogout={handleLogout}>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};

// eslint-disable-next-line react/prop-types
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
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/articlesbycategory/:id" component={ArticlesByCategory} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/" component={Home} />
              <Route exact path="/legalmentions" component={LegalMentions} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/myprofile" component={MyProfile} /> */}
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </Container>
          <Footer isLogged={isLogged} handleLogout={handleLogout} />
        </div>
      </ResponsiveContainer>
    </>
  );
};

// == Export
export default App;
