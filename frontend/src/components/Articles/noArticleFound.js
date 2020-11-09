// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Segment, Icon, Header, Button,
} from 'semantic-ui-react';

// == Composant
const NoArticleFound = () => (
  <Segment vertical style={{ padding: '4em 0em' }}>
    <Grid centered container verticalAlign="middle">
      <Grid.Row>
        <Header as="h2" icon>
          <Icon loading size="massive" name="frown" />
          Erreur 404
          <Header.Subheader>
            Problème lors du chargement des ressources, veuillez réessayer plus tard.
          </Header.Subheader>
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Button as={Link} to="/" color="black" animated="fade" size="huge" style={{ marginTop: '4em' }}>
          <Button.Content visible>Retour à l'accueil</Button.Content>
          <Button.Content hidden>
            <Icon name="home" />
          </Button.Content>
        </Button>
      </Grid.Row>
    </Grid>
  </Segment>
);

// == Export
export default NoArticleFound;
