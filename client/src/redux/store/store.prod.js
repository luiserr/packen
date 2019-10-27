/**
 *
 * @author Luis Rivero Romero
 * @file Se implementa el store de redux para el proceso de produccion
 * @version 1.0.0
 */

import { createStore } from 'redux';

import reducers from '../reducers';

export default function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}
