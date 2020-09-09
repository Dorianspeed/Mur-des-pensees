// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button, Grid, Segment, Icon, Header,
} from 'semantic-ui-react';

// == Import : local
import './styles.scss';

// == Composant
const NotFound = () => (
  <Segment vertical style={{ padding: '4em 0em' }}>
    <Grid centered container verticalAlign="middle">
      <Grid.Row>
        <Header as="h2" icon>
          <Icon loading size="massive" name="frown" />
          Erreur 404
          <Header.Subheader>
            Cette page n'existe pas.
          </Header.Subheader>
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Button as={NavLink} to="/" color="black" animated="fade" size="huge" style={{ marginTop: '4em' }}>
          <Button.Content visible>Retour à l'accueil</Button.Content>
          <Button.Content hidden>
            <Icon name="home" />
          </Button.Content>
        </Button>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default NotFound;
