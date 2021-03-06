// Importation des dépendances
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = process.env.PORT | 3000

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphQL/schema');
const resolvers = require('./graphQL/resolver');
const dataSources = require('./graphQL/dataSources');

const { CachedPool } = require('./client/cachedPool');
const clientVisitor = new CachedPool ({ connectionString: process.env.PG_URL_VISITOR });
const clientReader = new CachedPool ({ connectionString: process.env.PG_URL_READER });
const clientEditor = new CachedPool ({ connectionString: process.env.PG_URL_EDITOR });
const clientChiefEditor = new CachedPool ({ connectionString: process.env.PG_URL_CHIEF });

// On bloque les requêtes venant d'autres domaines
app.use(cors({origin: 'http://3.89.123.41/', credentials: true}));

// Mise en place des fichiers statiques
app.use(express.static(__dirname + '/public'));

// Mise en place de la session
app.use(session({
    secret: process.env.SESSION_PASSWORD,
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: (60 * 60 * 1000)
    }
}));

// Modification du client en fonction du rôle
app.use((request, _, next) => {
    if (request.session.user) {
        switch (request.session.user.role) {
            case 'reader': 
                request.database = clientReader;
                break;
            case 'editor':
                request.database = clientEditor;
                break;
            case 'chief_editor':
                request.database = clientChiefEditor;
                break;
        }
        next();
    } else {
        request.database = clientVisitor;
        next();
    }
});

// Création d'une route qui délivre l'index.html de React
app.get('/*', (_, response) => {
    response.sendFile('index.html', {
        root: 'public'
    });
});

// Création d'une instance multer
let storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'public/articles');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    }
});

// Création d'une instance d'upload
let upload = multer({storage}).single('file');

// Gestion de la route post permettant l'upload d'un fichier
app.post('/upload', (request, response) => {
    upload(request, response, (error) => {
        if (error instanceof multer.MulterError) {
            console.trace(error);
            return response.status(500).json(error);
        } else if (error) {
            console.trace(error);
            return response.status(500).json(error);
        } else {
            return response.status(200).send(request.file);
        }
    });
});

// Configuration du serveur Apollo
const graphQLServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        return {
            session: req.session,
            sqlClient: req.database
        };
    },
    dataSources: () => dataSources
});

// Branchement du GraphQL dans Express
app.use(graphQLServer.getMiddleware());

// Ecoute du serveur
app.listen(port, _ => {
    console.log(`Listening on port ${port}...`);
});