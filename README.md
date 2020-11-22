# Mur des Pensées

Le Mur des pensées est un site regroupant divers articles rédigés par des auteurs amateurs (type [Medium](https://medium.com/france)).

- Lien vers l'application : [Mur des Pensées](http://3.89.123.41/)

## Sommaire

- [Mur des Pensées](#mur-des-pensées)
  - [Sommaire](#sommaire)
  - [Origines du projet](#origines-du-projet)
  - [Technologies utilisées](#technologies-utilisées)
  - [Initialisation du projet en local](#initialisation-du-projet-en-local)
  - [Documentations](#documentations)

## Origines du projet

Ce projet a été réalisé dans le cadre de l'apothéose qui correspond au dernier mois de la formation [O'Clock](https://oclock.io/). Ce dernier mois est entièrement dédié au développement d'un projet en équipe. Nous nous sommes donc retrouvés dans une équipe de 5 personnes.

Le développement du projet s'est effectué en méthode Agile. Celui-ci a été découpé en 4 sprints :

- Sprint 0 : création du cachier des charges, conception de la base de données (dictionnaire de données, MCD, ...) et des wireframes
- Sprint 1 et 2 : développement du MVP (Minimum Viable Product) avec sa mise en ligne
- Sprint 3 : phase de débug(s) et développement de nouvelles fonctionnalités supplémentaires

Des rôles ont été définis pour chacun des membres de l'équipe :

- Dorian :
  - Product Owner
  - Scrum Master
  - Référent Technique Back
- Alexandre :
  - Lead Dev Back
  - Git Master
- Jérémy :
  - Lead Dev Front
- Anthony :
  - Référent des diverses librairies
- Marianne :
  - Référente Technique Front
  - Référente des diverses librairies

## Technologies utilisées

Outils utilisés en Back :

- [Node.js](https://nodejs.org/)
- Packages NPM :
  - [Express](https://www.npmjs.com/package/express)
  - [Express-session](https://www.npmjs.com/package/express-session)
  - [Apollo-server-express](https://www.npmjs.com/package/apollo-server-express)
  - [DataLoader](https://www.npmjs.com/package/dataloader)
  - [Joi](https://www.npmjs.com/package/joi)
  - [Bcrypt](https://www.npmjs.com/package/bcrypt)
  - [Multer](https://www.npmjs.com/package/multer)
- Bases de données [PostgreSQL](https://www.postgresql.org/) et [Redis](https://redis.io/)

Outils utilisés en Front :

- [React](https://fr.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Framework React Semantic-UI](https://react.semantic-ui.com/)
- [CKEditor](https://ckeditor.com/)
- Packages NPM :
  - [ESLint](https://www.npmjs.com/package/eslint)
  - [Axios](https://www.npmjs.com/package/axios)
  - [Prop-Types](https://www.npmjs.com/package/prop-types)
  - [Redux-Persist](https://www.npmjs.com/package/redux-persist)

## Initialisation du projet en local

L'application se trouve en ligne et est utilisable à ce lien : [Mur des Pensées](http://3.89.123.41/). Dans le cas où vous souhaiteriez la tester en local, voici la procédure à suivre :

1. Créer votre base de données sous PostgreSQL :
   - Créer un rôle avec l'option CREATEROLE : `CREATE ROLE dbrole WITH LOGIN ENCRYPTED 'password' CREATEROLE;`
   - Créer votre database : `CREATE DATABASE db OWNER dbrole;`
2. Créer votre fichier `.env` en suivant le `.env.example`
3. Créer votre fichier `sqitch.conf` en suivant le `sqitch.conf.example`
4. Effectuer une recherche dans le fichier `main.ef046c04b7d9bb3a2ec0.js` qui se trouve dans le dossier `public/js` du `backend` et remplacer tous les `http://3.89.123.41/` par `http://localhost:port` où le port correspond à ce que vous avez indiqué dans votre `.env`
5. Exécuter la commande `npm run start` pour lancer l'application en vous plaçant dans le dossier `backend`
6. Lancer un navigateur puis entrer le lien `http://localhost:port`

## Documentations

- [Cahier des charges](docs/specifications.md)
- Wireframes (prochainement...)
- [Arborescence de l'application](docs/tree_structure.png)
- [Conception de la base de données](docs/database_conception.md)
- [MCD](docs/MCD.svg)
- [Dictionnaire de données](docs/data_dictionary.md)
- [User stories](docs/user_stories.md)
