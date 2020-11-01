// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Image, Button, Header, Divider, Modal, Segment, Icon, Grid,
} from 'semantic-ui-react';

// == Import : local
import { formattingDate, parsingData } from '../../utils';
import NoArticleFound from './NoArticleFound';

// == Composant
const PendingArticles = ({
  pendingArticles, resetVisible, validateArticle, declineArticle,
}) => (
  <>
    {
      !pendingArticles[0] ? <NoArticleFound resetVisible={resetVisible} /> : (
        <>
          <Divider horizontal>
            <Header as="h3">
              <Icon name="check" />
              Les articles en attente de validation
            </Header>
          </Divider>
          <Segment vertical>
            <Card.Group itemsPerRow={3} stackable>
              {pendingArticles.map((article) => (
                <Card key={article.id} centered>
                  <Image
                    src={article.image_url}
                    alt="logo-articles"
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
                        <Modal
                          trigger={<Button color="black" style={{ marginTop: '1em' }}>Lire l'article</Button>}
                          header={article.title}
                          content={parsingData(article.content)}
                          actions={[
                            {
                              key: 'validate',
                              content: 'Valider',
                              positive: true,
                              onClick: () => {
                                validateArticle({
                                  articleId: article.id,
                                });
                              },
                            },
                            {
                              key: 'decline',
                              content: 'Refuser',
                              negative: true,
                              onClick: () => {
                                declineArticle({
                                  articleId: article.id,
                                });
                              },
                            },
                          ]}
                          closeIcon
                        />
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
              ))}
            </Card.Group>
            <Grid textAlign="center">
              <Grid.Column>
                <Button color="black" onClick={resetVisible} style={{ marginTop: '2em' }}>Revenir au panneau d'administration</Button>
              </Grid.Column>
            </Grid>
          </Segment>
        </>
      )
    }
  </>
);

PendingArticles.propTypes = {
  pendingArticles: PropTypes.array.isRequired,
  resetVisible: PropTypes.func.isRequired,
  validateArticle: PropTypes.func.isRequired,
  declineArticle: PropTypes.func.isRequired,
};

// == Export
export default PendingArticles;
