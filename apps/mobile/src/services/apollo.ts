import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.0.3:4000/graphql", // Substitua pelo endereço IP da sua máquina
  cache: new InMemoryCache(),
});

export default client;
