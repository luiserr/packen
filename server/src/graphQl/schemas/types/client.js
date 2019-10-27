export default `
type Client {
  identification: String
  name: String
  email: String
  phone: String
  addres: String
}

input ClientInput {
  identification: String!
  name: String!
  email: String!
  phone: String!
  addres: String
}
`;
