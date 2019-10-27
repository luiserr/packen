import Connection from "../connection";

export default class BaseModel {
  constructor(params) {
    this.connection = new Connection("postgres", "luiserr64", "packen");
    this.attributes = {};
    this.createAttributes = this.createAttributes.bind(this);
    this.mapResultToAttributes = this.mapResultToAttributes.bind(this);
    this.row = this.row.bind(this);
    this.rows = this.rows.bind(this);
  }

  createAttributes(attributes = {}) {
    this.attributes = {
      ...attributes
    };
  }

  mapResultToAttributes(row = {}) {
    for (const attr in row) {
      this.attributes[attr] = row[attr];
    }
    return this.attributes;
  }

  async row(sql = "", ...params) {
    let result = {};
    await this.connection
      .executeQuery(sql, [...params])
      .then(rows => {
        result = this.mapResultToAttributes(rows[0]);
      })
      .catch(err => console.log(err));
    return result;
  }

  async rows(sql = "", ...params) {
    let result = [];
    await this.connection
      .executeQuery(sql, [...params])
      .then(rows => {
        result = rows.map(row => {
          return this.mapResultToAttributes(row);
        });
      })
      .catch(err => console.log(err));
    return result;
  }
}
