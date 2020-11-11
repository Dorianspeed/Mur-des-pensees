// == Import : npm
import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Form, Image, Header, Segment, Message, Grid, Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import options from './selectOptions';

// == Composant
const SignUp = ({
  firstname, lastname, email, password, confirmedPassword, avatarUrl, onFormSubmit,
  onInputChange, signUpSubmitSuccess,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit();
  };

  const handleInputChange = (_, data) => {
    const { name, value } = data;
    onInputChange({ [name]: value });
  };

  return (
    <>
      {signUpSubmitSuccess && <Redirect to="/login" />}
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
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Mot de passe (8 caractères minimum)" type="password" name="password" value={password} onChange={handleInputChange} required />
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
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  signUpSubmitSuccess: PropTypes.bool.isRequired,
};

// == Export
export default SignUp;
