// == Import : npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, Image, Segment, Grid, Dimmer, Loader, Breadcrumb,
} from 'semantic-ui-react';

// == Import : local
import NoCategoryFound from './noCategoryFound';
import { stringSlugify } from '../../utils';

// == Composant
const Categories = ({ getCategories, categories, loading }) => {
  useEffect(() => {
    getCategories();
  }, []);

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
              <Breadcrumb.Section active>Catégories</Breadcrumb.Section>
            </Breadcrumb>
          </Segment>
          <Segment vertical style={{ padding: '2em 0em 4em 0em' }}>
            <Grid container stackable verticalAlign="middle">
              <Card.Group centered stackable itemsPerRow={3}>
                {
                  !categories[0] ? <NoCategoryFound /> : categories.map((category) => (
                    <Card as={Link} to={`/category/${stringSlugify(category.name)}`} key={category.id}>
                      <Image src={category.image_url} />
                      <Card.Content
                        textAlign="center"
                        style={
                            {
                              backgroundColor: '#1b1c1d', color: 'white', fontSize: '1.2em', fontWeight: 'bold',
                            }
                          }
                      >
                        {category.name}
                      </Card.Content>
                    </Card>
                  ))
                }
              </Card.Group>
            </Grid>
          </Segment>
        </>
      )}
    </>
  );
};

Categories.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default Categories;
