import BaseModel from "./baseModel";

export default class Client extends BaseModel {
  constructor(params = {}) {
    super(params);
    const {
      identification = "",
      name = "",
      email = "",
      phone = "",
      addres = ""
    } = params;
    this.createAttributes({
      identification,
      name,
      phone,
      email,
      addres
    });
  }

  search() {
    const sql = `select 
                  cli_identification "identification",
                  cli_email "email",
                  cli_phone "phone",
                  cli_name "name",
                  cli_addres "addres"
                from client;`;
    return this.rows(sql);
  }

  find() {
    const {
      attributes: { identification }
    } = this;
    const sql = `SELECT 
                  cli_identification "identification",
                  cli_email "email",
                  cli_phone "phone",
                  cli_name "name",
                  cli_addres "addres" 
                FROM public.client where cli_identification = $1;`;
    return this.row(sql, identification);
  }

  save() {
    const {
      attributes: { identification, name, phone, email, addres }
    } = this;
    const sql = `
    insert into client (cli_identification, cli_name, cli_phone, cli_email, cli_addres)
      values ($1, $2, $3, $4, $5) on conflict (cli_identification) 
      do update set
        cli_name = excluded.cli_name,
        cli_phone = excluded.cli_phone,
        cli_email = excluded.cli_email,
        cli_addres = excluded.cli_addres 
      returning 
        cli_identification "identification",
        cli_email "email",
        cli_phone "phone",
        cli_name "name",
        cli_addres "addres" ;
    `;
    return this.row(sql, identification, name, phone, email, addres);
  }
}
