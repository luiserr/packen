import BaseModel from "./baseModel";

export default class Brands extends BaseModel {
  constructor(params = {}) {
    super(params);
    const {
      id = "",
      name = "",
      description = "",
      reference = "",
      price = "",
      brand = "",
      image = ""
    } = params;
    this.createAttributes({
      id,
      name,
      description,
      reference,
      price,
      brand,
      image
    });
  }

  search() {
    const sql = `select 
                  pro_id "id", 
                  pro_name "name", 
                  pro_description "description", 
                  pro_reference "reference", 
                  pro_price "price",     
                  pro_image "image",
                  bra_id "idBrand",
                  bra_name "nameBrand"  
                from products
                inner join brands on bra_id = pro_brand;`;
    return this.rows(sql);
  }

  find() {
    const {
      attributes: { id }
    } = this;
    const sql = `select 
                  pro_id "id", 
                  pro_name "name", 
                  pro_description "description", 
                  pro_reference "reference", 
                  pro_price "price",     
                  pro_image "image",
                  bra_id "idBrand",
                  bra_name "nameBrand"  
                from products
                inner join brands on bra_id = pro_brand
                where pro_id = $1;`;
    return this.row(sql, id);
  }

  findByBrand() {
    const {
      attributes: { brand }
    } = this;
    console.log(brand);
    const sql = `select 
                  pro_id "id", 
                  pro_name "name", 
                  pro_description "description", 
                  pro_reference "reference", 
                  pro_price "price",     
                  pro_image "image",
                  bra_id "idBrand",
                  bra_name "nameBrand"  
                from products
                inner join brands on bra_id = pro_brand
                where pro_brand = $1;`;
    return this.rows(sql, brand);
  }
}
