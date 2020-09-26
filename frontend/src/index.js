// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// == Import : local
import App from './containers/App';
import { store, persistor } from './store';

// == Render
const rootReactElement = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
