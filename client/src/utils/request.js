import { SERVER } from '../constant';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

/**
 *
 * @param {Object} data
 * @param {String} method
 */
export function request(data = {}, method = 'POST') {
  const request = {
    method,
    headers,
    body: JSON.stringify(data)
  };
  return new Promise((resolve, reject) => {
    fetch(`${SERVER}/graphql`, request)
      .then(res => {
        return resolve(res.json());
      })
      .catch(err => {
        return reject(err);
      });
  });
}
