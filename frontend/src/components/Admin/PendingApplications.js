// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Image, Button, Header, Divider, Modal, Segment, Icon, Grid,
} from 'semantic-ui-react';

// == Import : local
import { formattingDate } from '../../utils';
import NoApplicationFound from './NoApplicationFound';

// == Composant
const PendingApplications = ({
  pendingApplications, resetVisible, validateApplication, declineApplication,
}) => (
  <>
    {
      !pendingApplications[0] ? <NoApplicationFound resetVisible={resetVisible} /> : (
        <>
          <Divider horizontal>
            <Header as="h3">
              <Icon name="check" />
              Les candidatures en attente de validation
            </Header>
          </Divider>
          <Segment vertical>
            <Card.Group itemsPerRow={3} stackable>
              {pendingApplications.map((application) => (
                <Card key={application.id} centered>
                  <Card.Content>
                    <Card.Description>
                      {application.content.split(' ').slice(0, 50).join(' ')}...
                    </Card.Description>
                    <Grid>
                      <Grid.Column textAlign="center">
                        <Modal
                          trigger={<Button color="black" style={{ marginTop: '1em' }}>Lire la candidature</Button>}
                          header={`${application.user.firstname} ${application.user.lastname}`}
                          content={application.content}
                          actions={[
                            {
                              key: 'validate',
                              content: 'Valider',
                              positive: true,
                              onClick: () => {
                                validateApplication({
                                  applicationId: application.id,
                                  userId: application.user.id,
                                });
                              },
                            },
                            {
                              key: 'decline',
                              content: 'Refuser',
                              negative: true,
                              onClick: () => {
                                declineApplication({
                                  applicationId: application.id,
                                  userId: application.user.id,
                                });
                              },
                            },
                          ]}
                          closeIcon
                        />
                      </Grid.Column>
                    </Grid>
                  </Card.Content>
                  <Card.Content extra>
                    <Image src={application.user.avatar_url} alt="logo-avatar" avatar />
                    <span>
                      Rédigé par {application.user.firstname} le {
                      formattingDate(application.created_at)
                      }
                    </span>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
            <Grid textAlign="center">
              <Grid.Column>
                <Button color="black" onClick={resetVisible} style={{ marginTop: '2em' }}>Revenir au panneau d'administration</Button>
              </Grid.Column>
            </Grid>
          </Segment>
        </>
      )
    }
  </>
);

PendingApplications.propTypes = {
  pendingApplications: PropTypes.array.isRequired,
  resetVisible: PropTypes.func.isRequired,
  validateApplication: PropTypes.func.isRequired,
  declineApplication: PropTypes.func.isRequired,
};

// == Export
export default PendingApplications;
