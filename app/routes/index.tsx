import { Heading, VStack } from "@chakra-ui/react";
import { VFC } from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { Layout } from "~/components/Layout";
import { FindShopQuery, getSdk } from "~/utils/generated";
import { graphQLClient } from "~/utils/shopifyClient";

export const loader: LoaderFunction = async () => {
  const sdk = getSdk(graphQLClient);
  const { shop } = await sdk.FindShop();
  return { shop };
};

const Index: VFC = () => {
  const shop = useLoaderData<FindShopQuery>();
  return (
    <Layout>
      <VStack>
        <Heading>Hello, world!</Heading>
        <Heading>{shop.shop.name}</Heading>
      </VStack>
    </Layout>
  );
};
export default Index;
