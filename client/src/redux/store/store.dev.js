/**
 *
 * @author Luis Rivero Romero
 * @file Se implementa el store de redux para el proceso de desarrollo
 * @version 1.0.0
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from '../reducers';

export default function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}
