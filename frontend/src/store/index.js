// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// == Import : local
import rootReducer from './reducers';
import ajaxMiddleware from './middleware/ajaxMiddleware';
import userMiddleware from './middleware/userMiddleware';
import editorMiddleware from './middleware/editorMiddleware';

// == Configuration du persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    ajaxMiddleware,
    userMiddleware,
    editorMiddleware,
  ),
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

// == Store
const store = createStore(
  persistedReducer,
  enhancers,
);

const persistor = persistStore(store);

// == Export
export { store, persistor };
