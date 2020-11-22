// == Import : npm
import React from 'react';
import {
  Header, List, Segment, Container, Grid, Breadcrumb,
} from 'semantic-ui-react';

// == Composant
const LegalMentions = () => (
  <>
    <Segment basic padded>
      <Breadcrumb size="large">
        <Breadcrumb.Section href="/">Accueil</Breadcrumb.Section>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section active>Mentions légales</Breadcrumb.Section>
      </Breadcrumb>
    </Segment>
    <Segment vertical style={{ padding: '2em 0em 4em 0em' }}>
      <Grid container verticalAlign="middle">
        <Segment basic>
          <Container>
            <Header as="h2" textAlign="center">Politique de confidentialité</Header>
            <Header as="h4" textAlign="center">http://3.89.123.41/
              <Header.Subheader>Type de site : blog</Header.Subheader>
            </Header>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Le but de cette politique de confidentialité</Header>
        <Segment basic>
          <Container>
            <p>
              Le but de cette politique de confidentialité est d'informer les utilisateurs
              de notre site des données personnelles que nous recueillerons ainsi que
              les informations suivantes, le cas échéant :
            </p>
            <List bulleted>
              <List.Item>
                Les données personnelles que nous recueillerons
              </List.Item>
              <List.Item>
                L'utilisation des données recueillies
              </List.Item>
              <List.Item>
                Qui a accès aux données recueuillies
              </List.Item>
              <List.Item>
                Les droits des utilisateurs du site
              </List.Item>
              <List.Item>
                La politique de cookies du site
              </List.Item>
            </List>
            <p>
              Cette polique de confidentialité fonctionne parallèlement aux conditions
              générales d'utilisation de notre site.
            </p>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Lois applicables</Header>
        <Segment basic>
          <Container>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD),
              cette politique de confidentialité est conforme aux règlements suivants.
            </p>
            <p>
              Les données à caractère personnel doivent être :
            </p>
            <List bulleted>
              <List.Item>
                traitées de manière licite, loyale et transparente au regard de la
                personne concernée (licéite, loyauté, transparence);
              </List.Item>
              <List.Item>
                collectées pour des finalités déterminées, explicites et légitimes,
                et ne pas être traitées ultérieurement d'une manière incompatible
                avec ces finalités; le traitement ultérieur à des fins archivistiques
                dans l'intérêt public, à des fins de recherche scientique ou
                historique ou à des fins statistiques n'est pas considéré, conformément
                à l'article 89, paragraphe 1, comme incompatible avec les finalités
                initiales (limitation des finalités);
              </List.Item>
              <List.Item>
                adéquates, pertinentes et limitées à ce qui est nécessaire au regard
                des finalités pour lesquelles elles sont traitées
                (minimisation des données);
              </List.Item>
              <List.Item>
                exactes et, si nécessaire, tenues à jour; toutes les mesures raisonnables
                doivent être prises pour que les données à caractère personnel qui sont
                inexactes, eu égard aux finalités pour lesquelles elles sont traitées,
                soient effacées ou rectifiées sans tarder (exactitude);
              </List.Item>
              <List.Item>
                conservées sous une forme permettant l'identification des personnes
                concernées pendant une durée n'excédant pas celle nécessaire au
                regard des finalités pour lesquelles elles sont traitées; les données
                à caractère personnel peuvent être conservées pour des durées plus
                longues dans la mesure où elles seront traitées exclusivement à des fins
                archivistiques dans l'intérêt public, à des fins de recherche scientique
                ou historique ou à des fins statistiques conformément à l'article 89,
                paragraphe 1, pour autant que soient mises en oeuvre les mesures techniques et
                organisationnelles appropriées requises par le règlement afin de garantir
                les droits et libertés de la personne concernée (limitation de la conservation);
              </List.Item>
              <List.Item>
                traitées de façon à garantir une sécurité appropriée des données à caractère
                personnel, y compris la protection contre le traitement non autorisé ou
                illicite et contre la perte, la destruction ou les dégâts d'origine
                accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées
                (intégrité et confidentialité).
              </List.Item>
            </List>
            <p>
              Le traitement n'est licite que si, et dans la mesure où, au moins une des
              conditions suivantes est remplie :
            </p>
            <List bulleted>
              <List.Item>
                la personne concernée a consenti au traitement de ses données à caractère personnel
                pour une ou plusieurs finalités spécifiques;
              </List.Item>
              <List.Item>
                le traitement est nécessaire à l'exécution d'un contrat auquel la personne
                concernée est partie ou à l'exécution de mesures précontractuelles prises
                à la demande de celle-ci;
              </List.Item>
              <List.Item>
                le traitement est nécessaire au respect d'une obligation légale à laquelle
                le responsable du traitement est soumis;
              </List.Item>
              <List.Item>
                le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne
                concernée ou d'une autre personne physique;
              </List.Item>
              <List.Item>
                le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou
                relevant de l'exercice de l'autorité publique dont est investi le responsable
                du traitement;
              </List.Item>
              <List.Item>
                le traitement est nécessaire aux fins des intérêts légitimes poursuivis par
                le responsable du traitement ou par un tiers, à moins que ne prévalent les
                intérêts ou les libertés et droits fondamentaux de la personne concernée
                qui exigent une protection des données à caractère personnel, notamment
                lorsque la personne concercée est un enfant.
              </List.Item>
            </List>
            <p>
              Pour les résidents de l'Etat de Californie, cette politique de confidentialité
              vise à se conformer à la California Consumer Privacy Act (CCPA). S'il y a des
              incohérences entre ce document et la CCPA, la législation de l'Etat s'appliquera.
              Si nous constatons des incohérences, nous modifierons notre politque pour
              nous conformer à la loi pertinente.
            </p>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Consentement</Header>
        <Segment basic>
          <Container>
            <p>
              Les utilisateurs conviennent qu'en utilisant notre site, ils consentent à :
            </p>
            <List bulleted>
              <List.Item>
                les conditions énoncées dans la présente politique de confidentialité et
              </List.Item>
              <List.Item>
                la collecte, l'utilisation et la conservation des données énumérées
                dans la présente politique.
              </List.Item>
            </List>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Données personnelles que nous collectons</Header>
        <Segment basic>
          <Container>
            <Header as="h5">Données collectées automatiquement</Header>
            <p>
              Nous ne collectons aucune donnée automatiquement sur notre site.
            </p>
            <Header as="h5">Données recueillies de façon non automatique</Header>
            <p>
              Nous pouvons également collecter les données suivantes lorsque vous effectuez
              certaines fonctions de notre site :
            </p>
            <List bulleted>
              <List.Item>
                Prénom et nom
              </List.Item>
              <List.Item>
                Email
              </List.Item>
            </List>
            <p>
              Ces données peuvent être recueillies au moyen des méthodes suivantes :
            </p>
            <List bulleted>
              <List.Item>
                Enregistrement d'un compte
              </List.Item>
              <List.Item>
                Modifications d'un compte
              </List.Item>
            </List>
            <p>
              Veuillez noter que nous ne collectons que les données qui nous aident à atteindre
              l'objectif énoncé dans cette politique de confidentialité. Nous ne recueillerons
              pas de données supplémentaires sans vous en informer au préalable.
            </p>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Comment nous utilisons les données personnelles</Header>
        <Segment basic>
          <Container>
            <p>
              Les données personnelles reucueillies sur notre site seront utilisées uniquement
              aux fins précisées dans la présente politique ou indiquées sur les pages pertinentes
              de notre site. Nous n'utiliseront pas vos données au-delà de ce que nous divulguerons.
            </p>
            <p>
              Les données que nous recueillons lorsque l'utilisateur exécute certaines fonctions
              peuvent être utilisées aux fins suivantes :
            </p>
            <List bulleted>
              <List.Item>
                Gestion de la connexion d'un utilisateur
              </List.Item>
              <List.Item>
                Affichage du nom de l'auteur d'un article
              </List.Item>
            </List>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Avec qui nous partageons les données personnelles</Header>
        <Segment basic>
          <Container>
            <Header as="h5">Employés</Header>
            <p>
              Nous pouvons divulguer à tout membre de notre organisation les données utilisateur
              dont il a raisonnablement besoin pour réaliser les objectifs énoncés dans la
              présente politique.
            </p>
            <Header as="h5">Tierces parties</Header>
            <p>
              Nous pouvons partager les données utilisateur avec les tiers suivants :
            </p>
            <List bulleted>
              <List.Item>
                _________
              </List.Item>
            </List>
            <p>
              Nous pouvons partager les données utilisateur avec des tiers aux fins suivantes :
            </p>
            <List bulleted>
              <List.Item>
                _________
              </List.Item>
            </List>
            <p>
              Les tiers ne seront pas en mesure d'accéder aux données des utilisateurs au-delà
              de ce qui est raisonnablement nécessaire pour atteindre l'objectif donné.
            </p>
            <Header as="h5">Autres divulgations</Header>
            <p>
              Nous nous engageons à ne pas vendre ou partager vos données avec des tiers,
              sauf dans les cas suivants :
            </p>
            <List bulleted>
              <List.Item>
                si la loi l'exige
              </List.Item>
              <List.Item>
                si elle est requise pour toute procédure judiciaire
              </List.Item>
              <List.Item>
                pour prouver ou protéger nos droits légaux
              </List.Item>
              <List.Item>
                à des acheteurs ou des acheteurs potentiels de cette société dans le cas
                où nous cherchons à vendre la société
              </List.Item>
              <p>
                Si vous suivez des hyperliens de notre site vers un autre site, veuillez noter
                que nous ne sommes pas responsables et n'avons pas de contrôle sur leurs politiques
                et pratiques de confidentialité.
              </p>
            </List>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Combien de temps nous stockons les données personnelles</Header>
        <Segment basic>
          <Container>
            <p>
              Les données des utilisateurs seront conservées durant toute l'existence du site.
            </p>
            <p>
              Nous veillerons à ce que les utilisateurs soient avisés si leurs données sont
              conservées plus longtemps que cette durée.
            </p>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Comment nous protégeons vos données personnelles</Header>
        <Segment basic>
          <Container>
            <p>
              Les données sensibles sont cryptées en base de données.
            </p>
            <p>
              Alors que nous prenons toutes les précautions raisonnables pour nous assurer que nos
              données d'utilisateur sont sécurisées et que les utilisateurs sont protégés, il reste
              toujours du risque de préjudice. L'Internet en sa totalité peut être, parfois,
              peu sûr et donc nous sommes incapables de garantir la sécurité des données des
              utilisateurs au-delà de ce qui est raisonnablement pratique.
            </p>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Mineurs</Header>
        <Segment basic>
          <Container>
            <p>
              Le RGPD précise que les personnes de moins de 15 ans sont considérées comme des
              mineurs aux fins de la collecte de données. Les mineurs doivent avoir le consentement
              d'un représentant légal pour que leurs données soient recueillies, traitées et
              utilisées.
            </p>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Vos droits en tant qu'utilisateur</Header>
        <Segment basic>
          <Container>
            <p>
              En vertu du RGPD, les utilisateurs ont les droits suivants en tant que
              personnes concernées :
            </p>
            <List bulleted>
              <List.Item>
                droit d'accès
              </List.Item>
              <List.Item>
                droit de rectification
              </List.Item>
              <List.Item>
                droit à l'effacement
              </List.Item>
              <List.Item>
                droit de restreindre le traitement
              </List.Item>
              <List.Item>
                droit à la portabilité des données
              </List.Item>
              <List.Item>
                Droit d'objection
              </List.Item>
            </List>
            <p>
              Vous trouverez de plus amples informations sur ces droits au chapitre 3 (art 12-23)
              du RGPD.
            </p>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Comment modifier, supprimer ou contester les données recueillies</Header>
        <Segment basic>
          <Container>
            <p>
              Si vous souhaitez que vos renseignements soient supprimées ou modifiés d'une façon ou
              d'une autre, veuillez communiquer avec notre agent de protection de la vie privée
              ici :
            </p>
            <p>
              Dorian Garcia<br />
              <a href="mailto:dorian@oclock.io">dorian@oclock.io</a>
            </p>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Modifications</Header>
        <Segment basic>
          <Container>
            <p>
              Cette politique de confidentialité peut être modifiée à l'occasion afin de maintenir
              la conformité avec la loi et de tenir compte de tout changement à notre processus de
              collecte de données. Nous recommandons à nos utilisateurs de vérifier notre politique
              de temps à autre pour s'assurer qu'ils soient informés de toute mise à jour. Au
              besoin, nous pouvons informer les utilisateurs par courriel des changements apportés
              à cette politique.
            </p>
          </Container>
        </Segment>

        <Header as="h4" attached="top" inverted>Contact</Header>
        <Segment basic>
          <Container>
            <p>
              Si vous avez des questions à nous poser, n'hésitez pas à communiquer avec nous en
              utilisant ce qui suit : <br />
              <a href="mailto:dorian@oclock.io">dorian@oclock.io</a>
            </p>
          </Container>
        </Segment>

        <Segment basic>
          <Container textAlign="center">
            <p>
              Date d'entrée en vigueur de la politique de confidentialité : le 07 Septembre 2020.
            </p>
          </Container>
        </Segment>
      </Grid>
    </Segment>
  </>
);

// == Export
export default LegalMentions;
