/* eslint-disable react/require-default-props */
// == Import : npm
import React from 'react';
import {
  Form, Image, Header, Segment, Message, Grid, Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Composant
const SignUp = ({
  firstname, lastname, email, password, confirmedPassword, avatarUrl, onFormSubmit, onInputChange,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
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
      <Segment basic padded>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              <Image src="/images/logo-black.png" />
              Formulaire d'inscription
            </Header>
            <Form size="large" onSubmit={handleSubmit}>
              <Segment stacked>
                <Form.Input fluid icon="user" iconPosition="left" placeholder="Prénom" type="text" name="firstname" value={firstname} onChange={handleInputChange} required />
                <Form.Input fluid icon="user" iconPosition="left" placeholder="Nom" type="text" name="lastname" value={lastname} onChange={handleInputChange} required />
                <Form.Input fluid icon="mail" iconPosition="left" placeholder="Email" type="email" name="email" value={email} onChange={handleInputChange} required />
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Mot de passe" type="password" name="password" value={password} onChange={handleInputChange} required />
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Confirmation du mot de passe" type="password" name="confirmed_password" value={confirmedPassword} onChange={handleInputChange} required />
                <Form.Select fluid placeholder="Choix de l'avatar" options={options} name="avatar_url" value={avatarUrl} onChange={handleInputChange} />
                <Button color="black" fluid size="large" type="submit">S'inscrire</Button>
              </Segment>
            </Form>
            <Message>
              Déjà inscrit ? <a href="/login">Se connecter !</a>
            </Message>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

SignUp.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmedPassword: PropTypes.string,
  avatarUrl: PropTypes.string,
  onFormSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
};

// == Export
export default SignUp;
