import { ApolloClient, InMemoryCache } from "@apollo/client";

const contentApi = process.env.NEXT_GRAPHCMS_CONTENT_API;

const client = new ApolloClient({
  uri: contentApi,
  cache: new InMemoryCache(),
});

export default client;
