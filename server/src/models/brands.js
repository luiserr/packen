import BaseModel from "./baseModel";

export default class Brands extends BaseModel {
  constructor(params = {}) {
    super(params);
    const { id = "", name = "", image = "" } = params;
    this.createAttributes({
      id,
      name,
      image
    });
  }

  search() {
    const sql = `select 
                  bra_id "id",
                  bra_name "name",
                  bra_image "image"
                from brands;`;
    return this.rows(sql);
  }

  find() {
    const {
      attributes: { id }
    } = this;
    const sql = `SELECT 
                  bra_id "id",
                  bra_name "name",
                  bra_image "image"
                FROM public.brands where bra_id = $1;`;
    return this.row(sql, id);
  }
}
