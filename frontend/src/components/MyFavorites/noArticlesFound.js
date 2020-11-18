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
          <Icon loading size="massive" name="circle notch" />
          Aucun article
          <Header.Subheader>
            Il semblerait que vous n'ayez pas encore d'article mis en favoris.
          </Header.Subheader>
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Button as={Link} to="/articles" color="black" size="huge" style={{ marginTop: '4em' }}>
          Retour aux articles
        </Button>
      </Grid.Row>
    </Grid>
  </Segment>
);

// == Export
export default NoArticleFound;
