/**
 * @description Esta funcion convierte un error de postgres a un formato legible.
 * @param {Object} error
 */
export function parseError(error) {
  const { message } = new Error(error);
  return {
    ...error,
    message
  };
}

export function prepareParams(...params) {
  return [...params];
}
