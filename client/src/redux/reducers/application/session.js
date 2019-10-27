/**
 *
 * @file Aqui esta contenido el reducer que manipula el estado de Login
 * @author Luis Rivero Romero
 * @version 1.0.0
 */

import { LOGIN, LOGOUT } from '../../types';

const initialState = {
  login: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      const { user } = action;
      return {
        ...state,
        login: true,
        user
      };
    }
    case LOGOUT: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
};
