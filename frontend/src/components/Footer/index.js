// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Segment, Container, Grid, Header, List,
} from 'semantic-ui-react';

// == Composant
const Footer = ({ isLogged, handleLogout, role }) => (
  <Segment className="Footer" inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row centered>
          <Grid.Column width={3}>
            <Header as="h4" inverted>Plan du site</Header>
            <List link inverted>
              <List.Item as={Link} to="/">
                Accueil
              </List.Item>
              <List.Item as={Link} to="/articles">
                Articles
              </List.Item>
              <List.Item as={Link} to="/categories">
                Catégories
              </List.Item>
              {role === 'reader' && (
                <List.Item as={Link} to="/applicationeditor">
                  Postuler au rôle de Rédacteur
                </List.Item>
              )}
              {role.includes('editor') && (
                <List.Item as={Link} to="/articleeditor">
                  Rédiger un article
                </List.Item>
              )}
              {role === 'chief_editor' && (
                <List.Item as={Link} to="/admin">
                  Panneau d'administration
                </List.Item>
              )}
              {isLogged && (
                <>
                  <List.Item as={Link} to="/myprofile">
                    Mon profil
                  </List.Item>
                  <List.Item as={Link} to="/" onClick={handleLogout}>
                    Se déconnecter
                  </List.Item>
                </>
              )}
              {!isLogged && (
                <>
                  <List.Item as={Link} to="/login">
                    Se connecter
                  </List.Item>
                  <List.Item as={Link} to="/signup">
                    S'inscrire
                  </List.Item>
                </>
              )}
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>A propos</Header>
            <List link inverted>
              <List.Item as={Link} to="/legalmentions">
                Mentions légales
              </List.Item>
              <List.Item as={Link} to="/about">
                L'équipe
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

Footer.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
};

// == Export
export default Footer;
