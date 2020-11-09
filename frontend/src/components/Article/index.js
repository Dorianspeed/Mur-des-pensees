// == Import : npm
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Header, Image, Container, Button, Icon, Segment, Grid, Label, Dimmer, Loader,
} from 'semantic-ui-react';

// == Import : local
import { formattingDate, parsingData, stringSlugify } from '../../utils';

// == Composant
const Article = ({ articles, getArticles, loading }) => {
  useEffect(() => {
    getArticles();
  }, []);

  const { slug } = useParams();

  const article = articles.find((element) => stringSlugify(element.title) === slug);

  return (
    <>
      {loading && (
        <Dimmer active inverted>
          <Loader size="massive">Chargement en cours</Loader>
        </Dimmer>
      )}
      {!loading && (
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
      )}
    </>
  );
};

Article.propTypes = {
  articles: PropTypes.array.isRequired,
  getArticles: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default Article;
