import { Heading, Text } from "@chakra-ui/react";
import { VFC } from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { Layout } from "~/components/Layout";
import { getSdk, GetShopInfoQuery } from "~/utils/shopifyGenerated";
import { shopifyClient } from "~/utils/shopifyClient";


// ここまで
//
//
//
// ここから

export const loader: LoaderFunction = async () => {
  const sdk = getSdk(shopifyClient);
  const { shop } = await sdk.GetShopInfo();
  return { shop };
};

// ここまで
//
//
//
// ここから

const Products: VFC = () => {
  const { shop } = useLoaderData<GetShopInfoQuery>();

  return (
    <Layout>
      <Heading
        fontWeight={"normal"}
        fontSize={16}
        mt={8}
        mb={10}
      >
        About
      </Heading>
      <Text w={"600px"}>{shop.description}</Text>
    </Layout>
  );
};
export default Products;