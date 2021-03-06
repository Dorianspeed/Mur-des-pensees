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
          Aucun article
          <Header.Subheader>
            Vous n'avez pas encore rédigé d'article.
          </Header.Subheader>
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Button as={Link} to="/article-editor" color="black" size="huge" style={{ marginTop: '4em' }}>
          Rédiger un article
        </Button>
      </Grid.Row>
    </Grid>
  </Segment>
);

// == Export
export default NoArticleFound;
