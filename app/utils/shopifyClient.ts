import { GraphQLClient } from "graphql-request";

const endpoint =
  "https://sample-olive.myshopify.com/api/2022-01/graphql.json";

export const shopifyClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": String(
      process.env.SHOPIFY_STOREFRONT_API_KEY,
    ),
  },
});
