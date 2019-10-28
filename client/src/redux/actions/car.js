import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, EMPTY_CAR } from '../types';

export function addCar(item = {}) {
  return {
    type: ADD_ITEM,
    item
  };
}

export function updateCar(item = {}) {
  return {
    type: UPDATE_ITEM,
    item
  };
}

export function deleteItem(item = '') {
  return {
    type: DELETE_ITEM,
    item
  };
}

export function emptyCar(item = '') {
  return {
    type: EMPTY_CAR
  };
}
