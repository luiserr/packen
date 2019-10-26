import pg from "pg";
import { parseError } from "../utils";
/**
 *
 *
 * @class Conection
 */
export default class Conection {
  /**
   *Creates an instance of Conection.
   * @param {*} user Usuario de la conexion a la base de datos
   * @param {*} password Contraseña del Usuario de la BD
   * @param {*} database Nombre de la base de datos a conectarse
   * @param {string} [port="5432"]
   * @param {string} [host="localhost"]
   * @param {string} [ssl="false"]
   * @memberof Conection
   */
  constructor(
    user,
    password,
    database,
    port = "5432",
    host = "localhost",
    ssl = "false"
  ) {
    this.stringConnection = `pg://${user}:${password}@${host}:${port}/${database}?ssl=${ssl}`;
    this.client = {};
  }

  connect() {
    this.client = new pg.Client(this.stringConnection);
    this.client.on("error", error => {
      console.log("Error: ", error);
    });
    return new Promise((resolve, reject) => {
      this.client.connect(error => {
        if (error) {
          return reject(error);
        }
        return resolve();
      });
    });
    this.client.on();
  }

  close() {
    return new Promise((resolve, reject) => {
      this.client.end(error => {
        if (error) {
          reject(parseError(error));
        } else {
          resolve();
        }
      });
    });
  }

  query(sql = "", params = []) {
    return new Promise((resolve, reject) => {
      try {
        this.client.query(sql, params, (error, result) => {
          if (!error) {
            resolve(result.rows);
          } else {
            reject(parseError(error));
          }
        });
      } catch (err) {
        console.error(err);
        reject(err);
      }
    });
  }
}
