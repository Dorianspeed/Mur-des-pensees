// == Import : npm
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, Icon, Image, Container, Header,
} from 'semantic-ui-react';

const HomepageHeading = ({ mobile }) => {
  const { pathname } = useLocation();
  return (
    <>
      { pathname === '/' && (
        <Container text style={{ padding: '1em 0em' }}>
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
      )}
    </>
  );
};

HomepageHeading.propTypes = {
  // eslint-disable-next-line react/require-default-props
  mobile: PropTypes.bool,
};

// == Export
export default HomepageHeading;
