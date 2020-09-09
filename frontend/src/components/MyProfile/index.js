/* eslint-disable react/require-default-props */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon, Divider, Header, Table, Image, Grid, Segment, Form, Modal, Button,
} from 'semantic-ui-react';

// == Import : local
import './styles.scss';
import { formattingDate } from '../../utils';

// == Composant
const MyProfile = ({
  firstname, lastname, email, avatarUrl, createdAt, updateUser, onFormSubmit, onInputChange,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    onFormSubmit();
  };

  const handleInputChange = (_, data) => {
    const { name, value } = data;
    onInputChange({ [name]: value });
  };

  const options = [
    {
      key: 'avatar1',
      text: 'avatar1',
      value: '/avatar/avatar1.svg',
      image: { avatar: true, src: '/avatar/avatar1.svg' },
    },
    {
      key: 'avatar2',
      text: 'avatar2',
      value: '/avatar/avatar2.svg',
      image: { avatar: true, src: '/avatar/avatar2.svg' },
    },
    {
      key: 'avatar3',
      text: 'avatar3',
      value: '/avatar/avatar3.svg',
      image: { avatar: true, src: '/avatar/avatar3.svg' },
    },
    {
      key: 'avatar4',
      text: 'avatar4',
      value: '/avatar/avatar4.svg',
      image: { avatar: true, src: '/avatar/avatar4.svg' },
    },
    {
      key: 'avatar5',
      text: 'avatar5',
      value: '/avatar/avatar5.svg',
      image: { avatar: true, src: '/avatar/avatar5.svg' },
    },
    {
      key: 'avatar6',
      text: 'avatar6',
      value: '/avatar/avatar6.svg',
      image: { avatar: true, src: '/avatar/avatar6.svg' },
    },
    {
      key: 'avatar7',
      text: 'avatar7',
      value: '/avatar/avatar7.svg',
      image: { avatar: true, src: '/avatar/avatar7.svg' },
    },
    {
      key: 'avatar8',
      text: 'avatar8',
      value: '/avatar/avatar8.svg',
      image: { avatar: true, src: '/avatar/avatar8.svg' },
    },
    {
      key: 'avatar9',
      text: 'avatar9',
      value: '/avatar/avatar9.svg',
      image: { avatar: true, src: '/avatar/avatar9.svg' },
    },
    {
      key: 'avatar10',
      text: 'avatar10',
      value: '/avatar/avatar10.svg',
      image: { avatar: true, src: '/avatar/avatar10.svg' },
    },
    {
      key: 'avatar11',
      text: 'avatar11',
      value: '/avatar/avatar11.svg',
      image: { avatar: true, src: '/avatar/avatar11.svg' },
    },
    {
      key: 'avatar12',
      text: 'avatar12',
      value: '/avatar/avatar12.svg',
      image: { avatar: true, src: '/avatar/avatar12.svg' },
    },
    {
      key: 'avatar13',
      text: 'avatar13',
      value: '/avatar/avatar13.svg',
      image: { avatar: true, src: '/avatar/avatar13.svg' },
    },
    {
      key: 'avatar14',
      text: 'avatar14',
      value: '/avatar/avatar14.svg',
      image: { avatar: true, src: '/avatar/avatar14.svg' },
    },
    {
      key: 'avatar15',
      text: 'avatar15',
      value: '/avatar/avatar15.svg',
      image: { avatar: true, src: '/avatar/avatar15.svg' },
    },
    {
      key: 'avatar16',
      text: 'avatar16',
      value: '/avatar/avatar16.svg',
      image: { avatar: true, src: '/avatar/avatar16.svg' },
    },
  ];

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
  onFormSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  avatarUrl: PropTypes.string,
  createdAt: PropTypes.string,
  updateUser: PropTypes.object,
};
