export default `
  searchProducts(limite: Int): [Product]
  findProduct(id: String!): Product
  findProductsByBrand(brand: String!): [Product]
`;
