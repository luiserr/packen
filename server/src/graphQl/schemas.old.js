export default `
type Brands {
  id: Int
  name: String
  image: String
}

type Products {
  id: Int
  name: String
  description: String
  reference: String
  price: Int
  image: String
  brand: Brands
}

type Client {
  identification: String
  name: String
  email: String
  phone: String
  addres: String
}

type Purchase {
  id: Int
  client: Client
  date: String
  time: String
  price: Int
  details: [Details]
}

type Details {
  product: Products
  quantity: Int
  subtotal: Int
}

type Query {
  searchClients(limite: Int): [Client]
  findClient(identification: String!): Client
}
`;
