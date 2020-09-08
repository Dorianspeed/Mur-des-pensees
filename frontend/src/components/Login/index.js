/* eslint-disable react/prop-types */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Image, Header, Segment, Message, Grid, Button,
} from 'semantic-ui-react';

// == Import : local
import './styles.scss';

// == Composant
const Login = ({
  email, password, onFormSubmit, onInputChange,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onInputChange({ [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  return (
    <>
      <Segment basic padded>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              <Image src="/images/logo-black.png" />
              Formulaire de connexion
            </Header>
            <Form size="large" onSubmit={handleFormSubmit}>
              <Segment stacked>
                <Form.Input fluid icon="user" iconPosition="left" placeholder="Adresse email" name="email" type="email" value={email} onChange={handleInputChange} required />
                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Mot de passe" name="password" type="password" value={password} onChange={handleInputChange} required />
                <Button color="black" fluid size="large" type="submit">Se connecter</Button>
              </Segment>
            </Form>
            <Message>
              Pas encore inscrit ? <a href="/form">S'inscrire !</a>
            </Message>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

Login.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  email: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  password: PropTypes.string,
};

export default Login;
