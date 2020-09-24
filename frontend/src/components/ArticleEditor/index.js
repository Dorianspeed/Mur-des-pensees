/* eslint-disable react/require-default-props */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';
import axios from 'axios';
import {
  Segment, Grid, Form, Label, Input, Select, Button,
} from 'semantic-ui-react';

// == Import : local
import './styles.scss';

// == Composant
const ArticleEditor = ({
  // eslint-disable-next-line react/prop-types
  categories, title, content, categoryId, onInputChange, onFormSubmit,
}) => {
  // eslint-disable-next-line react/prop-types
  const options = categories.map((category) => {
    const container = {};
    container.key = category.id;
    container.text = category.name;
    container.value = parseInt(category.id, 10);
    return container;
  });

  const handleInputChange = (_, data) => {
    const { name, value } = data;
    onInputChange({ [name]: value });
  };

  let uploadedFile;
  const handleFileUnputChange = (event) => {
    // eslint-disable-next-line prefer-destructuring
    uploadedFile = event.target.files[0];
  };

  const fileUpload = (file) => {
    const data = new FormData();

    data.append('file', file);

    return axios({
      url: 'http://localhost:3000/upload',
      method: 'post',
      data,
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fileUpload(uploadedFile)
      .then((result) => {
        const filePath = result.data.path.replace('public', '');
        onInputChange({ image_url: filePath });
        onFormSubmit();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.trace(error);
      });
  };

  return (
    <>
      <Segment vertical style={{ padding: '4em 0em' }}>
        <Grid container stackable verticalAlign="middle" textAlign="center">
          <Form onSubmit={handleFormSubmit} style={{ width: '95%' }}>
            <Segment basic>
              <Form.Field>
                <Label size="large" color="black" pointing="below">Titre de l'article</Label>
                <Input placeholder="Titre de l'article" name="title" value={title} className="input-title" onChange={handleInputChange} required />
              </Form.Field>
            </Segment>
            <Segment basic>
              <Form.Field>
                <Label size="large" color="black" pointing="below">Choix de la catégorie</Label>
                <Select placeholder="Choix de la catégorie" search selection options={options} name="category_id" value={categoryId} onChange={handleInputChange} required />
              </Form.Field>
            </Segment>
            <Segment basic>
              <Form.Field>
                <Label size="large" color="black" pointing="below">Choix d'une image d'en-tête</Label>
                <Input type="file" name="image_url" onChange={handleFileUnputChange} accept="image/png, image/jpeg, image/jpg" />
              </Form.Field>
            </Segment>
            <Segment basic>
              <Label size="large" color="black" pointing="below">Rédiger votre article</Label>
              <CKEditor
                data={content}
                config={{
                  language: 'fr',
                  toolbar: [['Format'], ['Bold'], ['Italic'], ['Link'], ['Blockquote'], ['BulletedList'], ['NumberedList'], ['Blocks'], ['Indent'], ['Outdent'], ['Undo'], ['Redo']],
                  height: 500,
                }}
                onChange={(event) => {
                  const data = event.editor.getData();
                  handleInputChange(event, { name: 'content', value: data });
                }}
              />
            </Segment>
            <Segment basic>
              <Button type="submit" content="Valider votre article" color="green" />
            </Segment>
          </Form>
        </Grid>
      </Segment>
    </>
  );
};

ArticleEditor.propTypes = {
  onInputChange: PropTypes.func,
  onFormSubmit: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  categoryId: PropTypes.number,
};

export default ArticleEditor;
