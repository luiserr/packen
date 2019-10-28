import client from "./client";
import brands from "./brands";
import products from "./products";

export default `
type Query{
  ${client}
  ${brands}
  ${products}
}
`;
