/* eslint-disable react/prop-types */
// == Import : npm
import React from 'react';
import {
  Header, Image, Container, Button, Icon, Segment, Grid, Label,
} from 'semantic-ui-react';

// == Import : local
import './styles.scss';
import { formattingDate, parsingData } from '../../utils';

// == Composant
const Article = ({ article }) => (
  <>
    <Segment vertical style={{ padding: '2.5em 0em' }}>
      <Segment basic padded>
        <Image src={article.image_url} alt="logo-de-larticle" size="massive" centered bordered />
      </Segment>
      <Segment basic padded size="big">
        <Container>
          <Label color="black" size="large" ribbon>{article.category.name}</Label>
          <Header as="h1">{article.title}</Header>
          {parsingData(article.content)}
          <Header as="h5">
            <Image src={article.user.avatar_url} avatar />
            <span>
              Ecrit par {article.user.firstname} le {formattingDate(article.created_at)}
            </span>
          </Header>
        </Container>
      </Segment>
      <Segment basic padded>
        <Grid>
          <Grid.Column textAlign="center">
            <Button color="black" href="#root" icon labelPosition="right">
              Retour en haut de la page
              <Icon name="up arrow" />
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment>
  </>
);

export default Article;
