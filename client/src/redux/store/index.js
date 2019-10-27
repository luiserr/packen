/**
 * @author Luis Rivero Romero
 * @file Este archivo contiene la configuracion del Store de Redux
 * @version 1.0.0
 */

import StoreDev from './store.dev';
import StoreProd from './store.prod';

export default () => {
  if (process.env.NODE_ENV === 'production') {
    return StoreProd();
  }
  return StoreDev();
};
