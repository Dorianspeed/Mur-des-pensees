// == Import : npm
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Header, Image, Container, Button, Icon, Segment, Grid, Label, Dimmer, Loader,
} from 'semantic-ui-react';

// == Import : local
import {
  formattingDate, parsingData, stringSlugify, stringPluralize,
} from '../../utils';

// == Composant
const Article = ({
  articles, getArticles, loading, isLogged, insertLike,
  deleteLike, favorites, getFavorites, insertFavorite, deleteFavorite,
}) => {
  useEffect(() => {
    getArticles();
    if (isLogged) {
      getFavorites();
    }
  }, []);

  const { slug } = useParams();

  const article = articles.find((element) => stringSlugify(element.title) === slug);

  const favoriteArticle = favorites.find((element) => element.article_id === article.id);

  const handleDeleteLike = () => {
    deleteLike(article.id);
  };

  const handleInsertLike = () => {
    insertLike(article.id);
  };

  const handleDeleteFavorite = () => {
    deleteFavorite(article.id);
  };

  const handleInsertFavorite = () => {
    insertFavorite(article.id);
  };

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
                {isLogged && (
                  <Container textAlign="center">
                    <Segment.Group horizontal>
                      <Segment style={{ fontSize: '1em' }}>
                        <Button icon>
                          <Icon name="minus" color="red" link onClick={handleDeleteLike} />
                        </Button>
                        <Button compact basic color="black">
                          <Icon name="heart" color="red" />
                          {article.likes === null ? '0' : article.likes} {stringPluralize('mention', article.likes)} "j'aime"
                        </Button>
                        <Button icon>
                          <Icon name="plus" color="green" link onClick={handleInsertLike} />
                        </Button>
                      </Segment>
                      <Segment style={{ fontSize: '1em' }}>
                        {!favoriteArticle && (
                          <>
                            <Button basic color="black" onClick={handleInsertFavorite}>
                              <Icon name="star" color="grey" />
                              Ajouter aux favoris
                            </Button>
                          </>
                        )}
                        {favoriteArticle && (
                          <>
                            <Button basic color="black" onClick={handleDeleteFavorite}>
                              <Icon name="star" color="yellow" />
                              Supprimer des favoris
                            </Button>
                          </>
                        )}
                      </Segment>
                    </Segment.Group>
                  </Container>
                )}
                <Header as="h5">
                  <Image src={article.user.avatar_url} avatar />
                  Par {article.user.firstname} le {formattingDate(article.created_at)}
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
  isLogged: PropTypes.bool.isRequired,
  insertLike: PropTypes.func.isRequired,
  deleteLike: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  getFavorites: PropTypes.func.isRequired,
  insertFavorite: PropTypes.func.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
};

// == Export
export default Article;
