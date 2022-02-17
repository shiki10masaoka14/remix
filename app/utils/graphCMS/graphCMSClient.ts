import { GraphQLClient } from "graphql-request";

const endpoint =
  "https://api-ap-northeast-1.graphcms.com/v2/ckzoznox3355201yygydq9zlj/master";

export const graphCMSClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_API_KEY}`,
  },
});
