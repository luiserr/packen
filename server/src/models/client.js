import BaseModel from "./baseModel";

export default class Client extends BaseModel {
  constructor(params) {
    super(params);
    this.attributes = {
      ...params
    };
  }

  searchClient() {
    const sql = `select 
    cli_identification identification
    cli_email email,
    cli_phone phone,
    cli_name name,
    cli_addres addres from Client;`;
    return this.query(sql);
  }
}
