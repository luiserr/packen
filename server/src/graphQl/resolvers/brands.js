import Brands from "../../models/brands";

const searchBrands = async () => {
  const brand = new Brands();
  const result = await brand.search();
  console.log(result);
  return result;
};

const findBrand = async (root, { id }) => {
  const brand = new Brands({ id });
  const result = await brand.find();
  return result;
};

export const Query = {
  searchBrands,
  findBrand
};
