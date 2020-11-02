// == Import : npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, Image, Segment, Grid,
} from 'semantic-ui-react';

// == Composant
const Categories = ({ getCategories, categories }) => {
  useEffect(() => {
    getCategories();
  });

  return (
    <>
      <Segment vertical style={{ padding: '4em 0em' }}>
        <Grid container stackable verticalAlign="middle">
          <Card.Group centered stackable itemsPerRow={3}>
            {
              categories.map((category) => (
                <Card as={Link} to={`/articlesbycategory/${category.id}`} key={category.id}>
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
  );
};

Categories.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

// == Export
export default Categories;
