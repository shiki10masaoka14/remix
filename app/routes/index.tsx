import {
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { VFC } from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { Link as RemixLink } from "remix";
import { Layout } from "~/components/Layout";
import {
  FindProductsQuery,
  getSdk,
} from "~/utils/generated";
import { graphQLClient } from "~/utils/shopifyClient";

export const loader: LoaderFunction = async () => {
  const sdk = getSdk(graphQLClient);
  const { products } = await sdk.FindProducts({
    first: 10,
  });
  return { products };
};

const Index: VFC = () => {
  const products = useLoaderData<FindProductsQuery>();
  return (
    <Layout>
      <SimpleGrid
        minChildWidth={"200px"}
        spacing={7}
        mb={"80px"}
      >
        {products.products.edges.map((product) => (
          <LinkBox
            key={product.node.id}
            _hover={{ opacity: 0.8 }}
          >
            <VStack>
              <Image
                src={product.node.featuredImage?.url}
              />
              <VStack spacing={0}>
                <Heading fontSize={16} fontWeight={"light"}>
                  <LinkOverlay
                    as={RemixLink}
                    to={`/${product.node.id}`}
                  >
                    {product.node.title}
                  </LinkOverlay>
                </Heading>
                <HStack>
                  <Text fontSize={14}>
                    ¥
                    {Math.floor(
                      product.node.priceRange
                        .maxVariantPrice.amount,
                    )}
                  </Text>
                  <Text fontSize={14}> +tax</Text>
                </HStack>
              </VStack>
            </VStack>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Layout>
  );
};
export default Index;
