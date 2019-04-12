import { ApolloServer } from "apollo-server";
import schema from "./schema";
import { API_PORT } from "./config";

const server = new ApolloServer({
  schema
});

server.listen(API_PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
