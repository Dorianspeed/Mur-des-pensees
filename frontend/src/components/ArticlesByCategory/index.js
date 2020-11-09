// == Import : npm
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, Image, Segment, Button, Grid, Dimmer, Loader,
} from 'semantic-ui-react';

// == Import : local
import NoArticleFound from './noArticlesFound';
import { formattingDate, parsingData } from '../../utils';

// == Composant
const Articles = ({ articles, getArticles, loading }) => {
  useEffect(() => {
    getArticles();
  }, []);

  const { id } = useParams();

  const articlesByCategory = articles.filter((element) => element.category.id === id);

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
                !articlesByCategory[0] ? <NoArticleFound /> : articlesByCategory.map((article) => (
                  <Card as={Link} to={`/article/${article.id}`} key={article.id}>
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
                      <Card.Description>{parsingData(article.excerpt)}</Card.Description>
                      <Grid>
                        <Grid.Column textAlign="center">
                          <Button color="black" style={{ marginTop: '1em' }}>Lire l'article</Button>
                        </Grid.Column>
                      </Grid>
                    </Card.Content>
                    <Card.Content extra>
                      <div>
                        <Image src={article.user.avatar_url} alt="logo-avatar" avatar />
                        <span>
                          {/* eslint-disable-next-line max-len */}
                          Rédigé par {article.user.firstname} le {formattingDate(article.created_at)}
                        </span>
                      </div>
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
};

// == Export
export default Articles;
