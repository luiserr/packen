import models from "../models";

const { Client } = models;
const client = new Client();

export default {
  Query: {
    searchClients: () => {
      return client.searchClient();
    }
  }
};
