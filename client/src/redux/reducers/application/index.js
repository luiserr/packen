/**
 *
 * @file En este archivo estan los combinados los reducers que pertenecen a caracteristicas de la apicacion
 * @author Luis Rivero Romero
 * @version 1.0.0
 */

import { combineReducers } from 'redux';

import { modal } from './modal';
import session from './session';

export default combineReducers({
  modal,
  session
});
