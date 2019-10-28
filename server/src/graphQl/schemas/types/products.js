export default `
type Products {
  id: Int
  name: String
  description: String
  reference: String
  price: Int
  image: String
  brand: Brands
}

type Product {
  id: Int
  name: String
  description: String
  reference: String
  price: Int
  image: String
  idBrand: String,
  nameBrand: String
}
`;
