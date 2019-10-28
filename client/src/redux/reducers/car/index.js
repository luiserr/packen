import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, EMPTY_CAR } from '../../types';

const initialState = [];

function updateCart(car = [], newItem = {}) {
  let quantity = newItem.quantity ? newItem.quantity : 1;
  if (car.find(item => item.id === newItem.id)) {
    return car.map(item => {
      if (item.id === newItem.id) {
        quantity = item.quantity + quantity;
        return {
          ...item,
          ...newItem,
          quantity
        };
      }
      return item;
    });
  }
  return [...car, { ...newItem, quantity }];
}

function deleteItem(cart = [], id) {
  return cart.filter(item => item.id !== id);
}

export default (state = initialState, action) => {
  const { type, item } = action;
  switch (type) {
    case ADD_ITEM: {
      return updateCart(state, item);
    }
    case UPDATE_ITEM: {
      return updateCart(state, item);
    }
    case DELETE_ITEM: {
      return deleteItem(state, item);
    }
    case EMPTY_CAR: {
      return initialState;
    }
    default:
      return state;
  }
};
