/**
 * @file Este archivo en el Entry Point del server
 * @author Luis Rivero Romero
 * @versio 1.0.0
 */
import express from "express";
import { PORT } from "./src/constant";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./src/graphQl/schemas";
import resolvers from "./src/graphQl/resolvers";
// import Client from "./src/models/client";

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
app.get("/", async (req, res) => {
  res.send("Already!");
});

server.applyMiddleware({ app });
app.listen(PORT, () =>
  console.log(
    `El servidor esta corriendo http://localhost:${PORT}${server.graphqlPath}`
  )
);
