// == Import : local
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment, Button, Divider, Header, Icon, Table, Grid,
} from 'semantic-ui-react';

// == Composant
const AdminPanel = ({
  pendingApplications, pendingArticles, handleVisibleApplications, handleVisibleArticles,
}) => (
  <>
    <Grid centered container verticalAlign="middle">
      <Segment raised padded>
        <Divider horizontal>
          <Header as="h3">
            <Icon name="desktop" />
            Panneau d'administration
          </Header>
        </Divider>
        <Table celled textAlign="center">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Nombre d'articles en attente de validation
              </Table.HeaderCell>
              <Table.HeaderCell>
                Nombre de candidatures en attente de validation
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                {pendingArticles.length}
              </Table.Cell>
              <Table.Cell>
                {pendingApplications.length}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Button color="black" onClick={handleVisibleArticles}>
                  Voir les articles
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button color="black" onClick={handleVisibleApplications}>
                  Voir les candidatures
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    </Grid>
  </>
);

AdminPanel.propTypes = {
  pendingApplications: PropTypes.array.isRequired,
  pendingArticles: PropTypes.array.isRequired,
  handleVisibleApplications: PropTypes.func.isRequired,
  handleVisibleArticles: PropTypes.func.isRequired,
};

// == Export
export default AdminPanel;
