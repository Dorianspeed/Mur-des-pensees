// == Import : npm
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Segment, Grid, Form, TextArea, Container, Icon, Header, Label, Button, Dimmer, Loader,
} from 'semantic-ui-react';

// == Composant
const ApplicationEditor = ({
  content, applicationEditorSubmitSuccess, onFormSubmit, onInputChange, loading,
}) => {
  const handleInputChange = (event) => {
    onInputChange({ applicationContent: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  return (
    <>
      {applicationEditorSubmitSuccess && <Redirect to="/articles" />}
      {loading && (
        <Dimmer active inverted>
          <Loader size="massive">Soumission de la candidature en cours</Loader>
        </Dimmer>
      )}
      {!loading && (
        <Grid centered style={{ padding: '2em 0em' }}>
          <Grid.Column width={14}>
            <Segment basic>
              <Header as="h3">
                <Icon name="pencil" />
                Candidature au poste de Rédacteur
              </Header>
              <Container>
                <p>
                  Bonjour à vous qui décidez d'évoluer au sein de notre site !
                  Si vous êtes ici, c'est que vous souhaitez monter en grade et gagner
                  le droit de rédiger des articles !
                </p>
                <p>
                  Pour se faire, rien de plus simple ! Dans le bloc de texte ci-dessous, donnez-nous
                  les raisons qui pourraient nous donner l'envie de vous faire évoluer !
                </p>
                <p>
                  Vous êtes libre dans la rédaction, soyez original et surtout convaincant !
                </p>
                <p>
                  A vous de jouer et peut-être à bientôt dans l'équipe des Rédacteurs !
                </p>
              </Container>
            </Segment>
            <Segment basic textAlign="center">
              <Form onSubmit={handleFormSubmit}>
                <Label size="large" color="black" pointing="below">Rédiger votre candidadure</Label>
                <TextArea placeholder="Rédiger votre candidature... Soyez créatifs !" value={content} onChange={handleInputChange} style={{ height: '500px' }} />
                <Segment basic textAlign="center">
                  <Button type="submit" color="green">Valider votre candidature</Button>
                </Segment>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      )}
    </>
  );
};

ApplicationEditor.propTypes = {
  content: PropTypes.string.isRequired,
  applicationEditorSubmitSuccess: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default ApplicationEditor;
