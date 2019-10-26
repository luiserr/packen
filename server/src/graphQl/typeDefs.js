// import { makeExecutableSchema } from "graphql-tools";
import { importSchema } from "graphql-import";
import schemas from "./schemas.graphql";
// import resolvers from "./resolvers";

const typeDefs = importSchema(schemas);

export default typeDefs;
