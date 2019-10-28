/**
 *
 * @file En este archivo se resumen todos los reducers
 * @author Luis Rivero Romero
 * @version 1.0.0
 */

import { combineReducers } from 'redux';

import application from './application';
import car from './car';

export default combineReducers({
  application,
  car
});
