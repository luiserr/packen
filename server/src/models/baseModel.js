import Connection from "../connection";

export default class BaseModel {
  constructor(params) {
    this.connection = new Connection("postgres", "luiserr64", "packen");
    this.prepareParameters = this.prepareParameters.bind(this);
    this.attributes = {};
  }

  query(sql = "", ...params) {
    return this.connection.query(sql, [...params]);
  }
}
