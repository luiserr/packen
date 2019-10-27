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
import cors from "cors";
// import Client from "./src/models/client";

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE.OPTIONS");
  res.header("Content-Type", "application/json;  charset=utf-8");
  res.header("x-ver", "1.0");
  next();
});

app.get("/", async (req, res) => {
  res.send("Already!");
});

server.applyMiddleware({ app });
app.listen(PORT, () =>
  console.log(
    `El servidor esta corriendo http://localhost:${PORT}${server.graphqlPath}`
  )
);
