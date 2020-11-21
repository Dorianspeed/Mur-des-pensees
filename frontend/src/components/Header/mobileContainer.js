// == Import : npm
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Icon, Image, Segment, Menu, Container, Sidebar,
} from 'semantic-ui-react';

// == Import : local
import HomepageHeading from './homepageHeading';

// == Composant
const MobileContainer = ({
  children, isLogged, handleLogout, role,
}) => {
  const [sidebarOpened, setSidebarOpened] = useState(null);

  return (
    <>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={() => setSidebarOpened(false)}
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
          {isLogged && (
            <>
              <Menu.Item as={NavLink} to="/my-favorites">
                <Icon name="star" />
                Mes favoris
              </Menu.Item>
              {role === 'reader' && (
                <Menu.Item as={NavLink} to="/application-editor">
                  <Icon name="pencil" />
                  Postuler au rôle de Rédacteur
                </Menu.Item>
              )}
              {role.includes('editor') && (
                <>
                  <Menu.Item as={NavLink} to="/article-editor">
                    <Icon name="pencil" />
                    Rédiger un article
                  </Menu.Item>
                  <Menu.Item as={NavLink} to="/my-articles">
                    <Icon name="book" />
                    Mes articles
                  </Menu.Item>
                </>
              )}
              {role === 'chief_editor' && (
                <Menu.Item as={NavLink} to="/admin">
                  <Icon name="computer" />
                  Panneau d'administration
                </Menu.Item>
              )}
              <Menu.Item as={NavLink} to="/my-profile">
                <Icon name="user circle" />
                Mon profil
              </Menu.Item>
              <Menu.Item as={NavLink} to="/" onClick={handleLogout}>
                <Icon name="sign-out" />
                Se déconnecter
              </Menu.Item>
            </>
          )}
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
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="tiny">
                <Menu.Item onClick={() => setSidebarOpened(true)} fitted>
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
                    <Button as={NavLink} to="/my-profile" inverted style={{ marginLeft: '-1em', paddingLeft: '1em', paddingRight: '1em' }}>
                      Mon profil
                    </Button>
                    <Button as={NavLink} to="/" inverted color="red" style={{ marginLeft: '0.5em', paddingLeft: '1em', paddingRight: '1em' }} onClick={handleLogout}>
                      Se déconnecter
                    </Button>
                  </Menu.Item>
                )}
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
};

// == Export
export default MobileContainer;
