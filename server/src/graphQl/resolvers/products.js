import Products from "../../models/products";

const searchProducts = async () => {
  const products = new Products();
  return await products.search();
};

const findProduct = async (root, { id }) => {
  const products = new Products({ id });
  const result = await products.find();
  return result;
};

const findProductsByBrand = async (root, { brand }) => {
  const products = new Products({ brand });
  const result = await products.findByBrand();
  return result;
};

export const Query = {
  searchProducts,
  findProduct,
  findProductsByBrand
};
