// == Import : npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Icon, Divider, Header, Table, Image, Grid, Segment, Form, Modal, Button,
} from 'semantic-ui-react';

// == Import : local
import { formattingDate } from '../../utils';
import options from './selectOptions';

// == Composant
const MyProfile = ({
  firstname, lastname, email, avatarUrl, createdAt, updateUser, onFormSubmit, onInputChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    onFormSubmit();
  };

  const handleInputChange = (_, data) => {
    const { name, value } = data;
    onInputChange({ [name]: value });
  };

  return (
    <>
      <Segment vertical style={{ padding: '4em 0em' }}>
        <Grid centered container verticalAlign="middle">
          <Segment raised padded>
            <Divider horizontal>
              <Header>
                <Icon name="user circle" />
                Avatar
              </Header>
            </Divider>
            <Grid>
              <Grid.Column>
                <Image src={avatarUrl} size="small" centered />
              </Grid.Column>
            </Grid>
            <Divider horizontal>
              <Header>
                <Icon name="info" />
                Informations personnelles
              </Header>
            </Divider>
            <Grid centered>
              <Grid.Row>
                <Grid.Column>
                  <Table definition>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          Inscrit le :
                        </Table.Cell>
                        <Table.Cell>
                          {formattingDate(createdAt)}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          Prénom :
                        </Table.Cell>
                        <Table.Cell>
                          {firstname}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          Nom :
                        </Table.Cell>
                        <Table.Cell>
                          {lastname}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          Email :
                        </Table.Cell>
                        <Table.Cell>
                          {email}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} trigger={<Button color="black">Modifier votre profil</Button>} size="tiny" closeIcon>
                  <Modal.Header>
                    Modifier votre profil
                  </Modal.Header>
                  <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                      <Form.Select fluid placeholder="Choix de l'avatar" options={options} name="avatar_url" value={updateUser.avatar_url} onChange={handleInputChange} />
                      <Form.Input fluid icon="user" iconPosition="left" placeholder="Prénom" type="text" name="firstname" value={updateUser.firstname} onChange={handleInputChange} required />
                      <Form.Input fluid icon="user" iconPosition="left" placeholder="Nom" type="text" name="lastname" value={updateUser.lastname} onChange={handleInputChange} required />
                      <Form.Input fluid icon="mail" iconPosition="left" placeholder="Email" type="email" name="email" value={updateUser.email} onChange={handleInputChange} required />
                      <Button fluid type="submit" color="green">Valider</Button>
                    </Form>
                  </Modal.Content>
                </Modal>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid>
      </Segment>
    </>
  );
};

// == Export
export default MyProfile;

MyProfile.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updateUser: PropTypes.object.isRequired,
};
