// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, Image, Segment, Button, Grid,
} from 'semantic-ui-react';

// == Import : local
import { formattingDate, parsingData } from '../../utils';

// == Composant
const Articles = ({ articles }) => (
  <>
    <Segment vertical style={{ padding: '4em 0em' }}>
      <Grid container stackable verticalAlign="middle">
        <Card.Group itemsPerRow={3} stackable>
          {
            articles.map((article) => (
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
  </>
);

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
};

// == Export
export default Articles;
