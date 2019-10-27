/**
 *
 *@description Esta funcioncrea una String Query para el servidor GraphQL
 * @export
 * @param {string} query Este es el nombre de la consulta configurada en GraphQL
 * @param {Array} [fields=[]] Arreglo que contiene los valores que se quieren obtener de la consulta
 * @param {Object} [params={}] Este contiene los datos a enviar a la consulta
 * @returns Object
 */
export function createQuery(query, fields = [], params = {}) {
  return {
    query: `{   ${query}${createParams(params)}{${fields.map(field => ` ${field}`)}  } }`
  };
}

/**
 *
 *@description Esta funcioncrea una String Mutation para el servidor GraphQL
 * @export
 * @param {string} mutation Este es el nombre de la consulta configurada en GraphQL
 * @param {string} input Este contiene el nombre del Input configurado en los schemas de GraphQL
 * @param {*} variables contiene el objeto con los datos que se van a usar en la Mutation
 * @param {*} [fields=[]] Arreglo que contiene los valores que se quieren obtener de la consulta
 * @returns
 */
export function createMutation(mutation, input, variables, fields = []) {
  return {
    query: `mutation ${mutation}($input: ${input}){${mutation}(input: $input){${fields.map(
      field => ` ${field}`
    )}}}`,
    variables: {
      input: {
        ...variables
      }
    }
  };
}

function createParams(params = {}) {
  let str = '(',
    empty = true;
  for (const attr in params) {
    empty = false;
    str += ` ${attr}: "${params[attr]}" `;
  }
  return empty ? '' : `${str} )`;
}
