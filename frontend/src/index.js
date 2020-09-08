// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// == Import : local
// Composants
import App from './containers/App';
// Store
import store from './store';

// == Render
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
