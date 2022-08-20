// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
    uri: "https://api.lens.dev",
    cache: new InMemoryCache(),
});

export default Client;