// == Import : npm
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Icon, Image, Segment, Menu, Container, Visibility,
} from 'semantic-ui-react';

// == Import : local
import HomepageHeading from './homepageHeading';

// == Composant
const DesktopContainer = ({
  children, isLogged, handleLogout, role, loading,
}) => {
  const [fixed, setFixed] = useState(null);
  return (
    <>
      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ padding: '1em 0em' }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="small"
            compact
          >
            <Container>
              <Menu.Item>
                <Image src={!fixed ? '/images/logo-white-text.png' : '/images/logo-black-text.png'} size="tiny" />
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
                  <Menu.Item position="right">
                    <Button as={NavLink} to="/my-profile" inverted={!fixed} color={fixed ? 'black' : null}>
                      Mon profil
                    </Button>
                    <Button inverted={!fixed} color="red" style={{ marginLeft: '0.5em' }} onClick={handleLogout} loading={loading}>
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
          <HomepageHeading />
        </Segment>
      </Visibility>
      {children}
    </>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default DesktopContainer;
