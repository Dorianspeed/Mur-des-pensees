// == Import : npm
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Divider, Button, Image, Segment, Container, Header, Grid,
} from 'semantic-ui-react';

// == Import : local
import './styles.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ImageCarousel from './carousel';

// == Composant
const Home = () => (
  <>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Pour les lecteurs, auteurs et curieux. Comme vous.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Il n'y a pas d'autre lieu combinant un tel niveau d'écriture avec une communauté si
              active et engagée. Mur des pensées est le lieu où les idées naissent, sont
              partagées et propagées.
            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Des revues de renommée mondiale, des voix inconnues et
              des sujets qui vous passionnent.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              De la culture à la politique, en passant par le sport et les sciences.
              Plonger plus profondément dans les choses que vous aimez, en un seul
              et même endroit sur Mur des pensées.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Segment attached="top">
              <Header as="h2">
                Catégories
              </Header>
            </Segment>
            <Segment attached="bottom">
              <ImageCarousel />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button as={NavLink} to="/categories" color="black" size="large">Voir les catégories</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              "Mais quel site !"
            </Header>
            <p style={{ fontSize: '1.33em' }}>C'est ce que tout le monde nous dit.</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              "Aucune fake news ici !"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src="/images/trump.jpg" />
              <b>Donald J. Trump</b> POTUS
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Cassez le mythe de l'auteur, retenez l'attention !
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Au lieu de nous concentrer sur la création de contenu riche et qualitatif,
          nous avons appris à maitriser l'art de ne rien faire afin de laisser
          libre cours à la fantastique imagination de notre communauté.
        </p>
        <Button as={NavLink} to="/articles" size="large" color="black">
          En lire plus
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <Link to="/articles">Les articles</Link>
        </Divider>

        <Header as="h3" style={{ fontSize: '2em' }}>
          Saviez-vous qu'il était possible d'être rémunéré grâce à vos articles?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Hmm, vous n'avez surement pas scrollé jusqu'ici, mais nous avons mis
          en place un système de rémunération des articles rédigés. Notre
          rédacteur en chef a une trésorerie infinie et souhaiterait en
          faire profiter les rédacteurs chevronnés ! En faites-vous parti ?
        </p>
        <Button as={NavLink} to="/form" size="large" color="black">
          Je suis intéressé
        </Button>
      </Container>
    </Segment>
  </>
);

// == Export
export default Home;
