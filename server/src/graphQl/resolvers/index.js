import { Query as queryClient, Mutation as mutationClient } from "./clients";

export default {
  Query: {
    ...queryClient
  },
  Mutation: {
    ...mutationClient
  }
};
