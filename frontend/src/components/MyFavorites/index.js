// == Import : npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, Image, Segment, Button, Grid, Dimmer, Loader, Icon,
} from 'semantic-ui-react';

// == Import : local
import NoArticleFound from './noArticlesFound';
import {
  formattingDate, parsingData, stringSlugify, stringPluralize,
} from '../../utils';

// == Composant
const Articles = ({
  articles, getArticles, loading, favorites, getFavorites,
}) => {
  useEffect(() => {
    getArticles();
    getFavorites();
  }, []);

  const favoriteArticles = articles.filter((article) => {
    const favoriteArticle = favorites.find((favorite) => favorite.article_id === article.id);
    return favoriteArticle;
  });

  return (
    <>
      {loading && (
        <Dimmer active inverted>
          <Loader size="massive">Chargement en cours</Loader>
        </Dimmer>
      )}
      {!loading && (
        <Segment vertical style={{ padding: '4em 0em' }}>
          <Grid container stackable verticalAlign="middle">
            <Card.Group itemsPerRow={3} stackable>
              {
                !favoriteArticles[0] ? <NoArticleFound /> : favoriteArticles.map((article) => (
                  <Card as={Link} to={`/article/${stringSlugify(article.title)}`} key={article.id}>
                    <Image
                      src={article.image_url}
                      alt="logo-articles"
                      key={article.category_id}
                      label={
                        {
                          content: article.category.name, ribbon: true, color: 'black',
                        }
                      }
                    />
                    <Card.Content>
                      <Card.Header>{article.title}</Card.Header>
                      <Card.Meta>
                        par {article.user.firstname} le {formattingDate(article.created_at)}
                      </Card.Meta>
                      <Card.Description>{parsingData(article.excerpt)}</Card.Description>
                      <Grid>
                        <Grid.Column textAlign="center">
                          <Button color="black" style={{ marginTop: '1em' }}>Lire l'article</Button>
                        </Grid.Column>
                      </Grid>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon name="heart" color="red" />
                      {article.likes === null ? '0' : article.likes} {stringPluralize('mention', article.likes)} "j'aime"
                    </Card.Content>
                  </Card>
                ))
              }
            </Card.Group>
          </Grid>
        </Segment>
      )}
    </>
  );
};

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  getArticles: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  favorites: PropTypes.array.isRequired,
  getFavorites: PropTypes.func.isRequired,
};

// == Export
export default Articles;
