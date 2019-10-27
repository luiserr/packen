/**
 * @file En este archivo esta el reducer que manipula el componente Modal
 * @author Luis Rivero Romero
 * @version 1.0.0
 */

import { SHOW_MODAL } from '../../types';

const initialState = {
  open: false,
  message: '',
  title: ''
};

export const modal = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_MODAL: {
      const { config } = action;
      return {
        ...initialState,
        ...config
      };
    }
    default:
      return state;
  }
};

export default modal;
