// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Icon, Header, Button,
} from 'semantic-ui-react';

// == Composant
const NoApplicationFound = ({ resetVisible }) => (
  <Grid centered container verticalAlign="middle">
    <Grid.Row>
      <Header as="h2" icon>
        <Icon loading size="massive" name="circle notch" />
        Aucune candidature
        <Header.Subheader>
          Les lecteurs n'ont pas encore rédigé de candidatures pour le poste de rédacteur
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

NoApplicationFound.propTypes = {
  resetVisible: PropTypes.func.isRequired,
};

// == Export
export default NoApplicationFound;
