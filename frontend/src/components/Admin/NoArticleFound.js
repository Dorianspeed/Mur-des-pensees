// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Icon, Header, Button,
} from 'semantic-ui-react';

// == Composant
const NoArticleFound = ({ resetVisible }) => (
  <Grid centered container verticalAlign="middle">
    <Grid.Row>
      <Header as="h2" icon>
        <Icon loading size="massive" name="circle notch" />
        Aucun article
        <Header.Subheader>
          Les rédacteurs n'ont pas encore rédigé d'articles
        </Header.Subheader>
      </Header>
    </Grid.Row>
    <Grid.Row>
      <Button color="black" size="huge" onClick={resetVisible} style={{ marginTop: '4em' }}>
        Retour au panneau d'administration
      </Button>
    </Grid.Row>
  </Grid>
);

NoArticleFound.propTypes = {
  resetVisible: PropTypes.func.isRequired,
};

// == Export
export default NoArticleFound;
