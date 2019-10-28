import { Query as queryClient, Mutation as mutationClient } from "./clients";
import { Query as queryBrand } from "./brands";
import { Query as queryProducts } from "./products";

export default {
  Query: {
    ...queryClient,
    ...queryBrand,
    ...queryProducts
  },
  Mutation: {
    ...mutationClient
  }
};
