import Client from "../../models/client";

const searchClients = async () => {
  const client = new Client();
  return await client.search();
};

const findClient = async (root, { identification }) => {
  const client = new Client({ identification });
  const result = await client.find();
  return result;
};

const addClient = async (root, { input }) => {
  const { identification, name, phone, email, addres } = input;
  const client = new Client({ identification, name, phone, email, addres });
  const result = await client.save();
  return result;
};

export const Query = {
  searchClients,
  findClient
};

export const Mutation = {
  addClient
};
