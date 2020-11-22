// == Import : npm
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Header, Image, Container, Button, Icon, Segment, Grid, Label, Dimmer, Loader, Breadcrumb,
} from 'semantic-ui-react';

// == Import : local
import {
  formattingDate, parsingData, stringSlugify,
} from '../../utils';

// == Composant
const Article = ({
  articles, getArticles, loading, isLogged, likes, getLikes, insertLike,
  deleteLike, favorites, getFavorites, insertFavorite, deleteFavorite,
  insertLikeLoading, deleteLikeLoading, insertFavoriteLoading, deleteFavoriteLoading,
}) => {
  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    if (isLogged && !loading) {
      getLikes();
      getFavorites();
    }
  }, [isLogged, loading]);

  // Récupération de l'article demandé pour lecture grâce à son slug
  const { slug } = useParams();
  const article = articles.find((element) => stringSlugify(element.title) === slug);

  // Vérification que l'article a une mention "j'aime" ou non
  const likedArticle = likes.find((element) => element.article_id === article.id);

  // Vérification que l'article est déjà en favoris ou non
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
          <Segment basic padded>
            <Breadcrumb size="large">
              <Breadcrumb.Section href="/">Accueil</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right angle" />
              <Breadcrumb.Section href="/categories">Catégories</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right angle" />
              <Breadcrumb.Section href={`/category/${stringSlugify(article.category.name)}`}>{article.category.name}</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right angle" />
              <Breadcrumb.Section active>{article.title}</Breadcrumb.Section>
            </Breadcrumb>
          </Segment>
          <Segment vertical style={{ padding: '0.5em 0em 2.5em 0em' }}>
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
                        {!likedArticle && (
                          <>
                            <Button as="div" labelPosition="right">
                              <Button onClick={handleInsertLike} loading={insertLikeLoading}>
                                <Icon name="heart" />
                                Ajouter une mention "j'aime"
                              </Button>
                              <Label basic pointing="left">
                                {article.likes}
                              </Label>
                            </Button>
                          </>
                        )}
                        {likedArticle && (
                          <>
                            <Button as="div" labelPosition="right">
                              <Button onClick={handleDeleteLike} loading={deleteLikeLoading}>
                                <Icon name="heart" color="red" />
                                Supprimer la mention "j'aime"
                              </Button>
                              <Label basic pointing="left">
                                {article.likes}
                              </Label>
                            </Button>
                          </>
                        )}
                      </Segment>
                      <Segment style={{ fontSize: '1em' }}>
                        {!favoriteArticle && (
                          <>
                            <Button onClick={handleInsertFavorite} loading={insertFavoriteLoading}>
                              <Icon name="star" color="grey" />
                              Ajouter aux favoris
                            </Button>
                          </>
                        )}
                        {favoriteArticle && (
                          <>
                            <Button onClick={handleDeleteFavorite} loading={deleteFavoriteLoading}>
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
  likes: PropTypes.array.isRequired,
  getLikes: PropTypes.func.isRequired,
  insertLike: PropTypes.func.isRequired,
  deleteLike: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  getFavorites: PropTypes.func.isRequired,
  insertFavorite: PropTypes.func.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  insertLikeLoading: PropTypes.bool.isRequired,
  deleteLikeLoading: PropTypes.bool.isRequired,
  insertFavoriteLoading: PropTypes.bool.isRequired,
  deleteFavoriteLoading: PropTypes.bool.isRequired,
};

// == Export
export default Article;
