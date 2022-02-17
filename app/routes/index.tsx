import { Center, Link, SimpleGrid } from "@chakra-ui/react";
import { VFC } from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { Link as RemixLink } from "remix";
import { Layout } from "~/components/Layout";
import { ProductCard } from "~/components/productCard";
import { shopifyClient } from "~/utils/shopify/shopifyClient";
import { GetProductsQuery, getSdk } from "~/utils/shopify/shopifyGenerated";


// ここまで
//
//
//
// ここから

export const loader: LoaderFunction = async () => {
  const sdk = getSdk(shopifyClient);
  const { products } = await sdk.GetProducts({
    first: 8,
  });
  return { products };
};

// ここまで
//
//
//
// ここから

const Index: VFC = () => {
  const products = useLoaderData<GetProductsQuery>();
  return (
    <Layout>
      <SimpleGrid
        minChildWidth={"200px"}
        spacing={7}
        mb={10}
      >
        {products.products.edges.map((product) => (
          <ProductCard
            key={product.node.id}
            product={product}
          />
        ))}
      </SimpleGrid>
      <Center mb={"80px"}>
        <Link as={RemixLink} to={`/products/1`}>
          View More
        </Link>
      </Center>
    </Layout>
  );
};
export default Index;