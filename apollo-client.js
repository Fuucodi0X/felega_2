import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://prime-dog-60.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;