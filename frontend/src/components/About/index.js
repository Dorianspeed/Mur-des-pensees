// == Import : npm
import React from 'react';
import {
  Segment, Container, Grid, Header, Icon, Breadcrumb, List,
} from 'semantic-ui-react';

// == Composant
const About = () => (
  <>
    <Segment basic padded>
      <Breadcrumb size="large">
        <Breadcrumb.Section href="/">Accueil</Breadcrumb.Section>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section active>A propos</Breadcrumb.Section>
      </Breadcrumb>
    </Segment>
    <Segment vertical style={{ padding: '2em 0em 4em 0em' }}>
      <Grid centered container verticalAlign="middle">
        <Header as="h1" attached="top" textAlign="center" inverted>Présentation des technologies utilisées</Header>
        <Segment padded basic>
          <Container>
            <Grid celled="internally" columns="equal">
              <Grid.Row centered columns={2}>
                <Grid.Column textAlign="center">
                  <Header as="h2">Front</Header>
                  <Icon name="html5" size="huge" color="orange" />
                  <Icon name="css3 alternate" size="huge" color="blue" />
                  <Icon name="sass" size="huge" color="pink" />
                  <Icon name="react" size="huge" color="teal" />
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Header as="h2">Back</Header>
                  <Icon name="node" size="huge" color="olive" />
                  <Icon name="database" size="huge" color="orange" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered columns={2}>
                <Grid.Column textAlign="center">
                  <Breadcrumb>
                    <Breadcrumb.Section>HTML5</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section>CSS3</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section>React</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section>Redux</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section>Semantic UI</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section>Axios</Breadcrumb.Section>
                  </Breadcrumb>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Breadcrumb>
                    <Breadcrumb.Section>Node.js</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section>Express - Apollo-Server</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section>GraphQL</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section>Sqitch</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section>PostgreSQL</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section>Redis</Breadcrumb.Section>
                  </Breadcrumb>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

        <Header as="h1" attached="top" textAlign="center" inverted>Présentation de l'équipe</Header>
        <Segment padded basic>
          <Container>
            <Grid celled="internally" columns="equal">
              <Grid.Row centered columns={2}>
                <Grid.Column textAlign="center">
                  <Header as="h3">Dorian Garcia</Header>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <List bulleted horizontal>
                    <List.Item>Product Owner</List.Item>
                    <List.Item>Scrum Master</List.Item>
                    <List.Item>Référent Technique Back</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered columns={2}>
                <Grid.Column textAlign="center">
                  <Header as="h3">Alexandre Caffarelli</Header>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <List bulleted horizontal>
                    <List.Item>Lead Dev Back</List.Item>
                    <List.Item>Git Master</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered columns={2}>
                <Grid.Column textAlign="center">
                  <Header as="h3">Jérémy Ponceau-Dallacasa</Header>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <List bulleted horizontal>
                    <List.Item>Lead Dev Front</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered columns={2}>
                <Grid.Column textAlign="center">
                  <Header as="h3">Marianne Girard</Header>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <List bulleted horizontal>
                    <List.Item>Référente des Librairies</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered columns={2}>
                <Grid.Column textAlign="center">
                  <Header as="h3">Anthony Gallego</Header>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <List bulleted horizontal>
                    <List.Item>Référent des Librairies</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Grid>
    </Segment>
  </>
);

// == Export
export default About;
