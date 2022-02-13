import {
  Heading,
  Table,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { VFC } from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { Layout } from "~/components/Layout";
import {
  FindProductQuery,
  getSdk,
} from "~/utils/generated";
import { graphQLClient } from "~/utils/shopifyClient";

export const loader: LoaderFunction = async ({
  params,
}) => {
  const sdk = getSdk(graphQLClient);
  const { product } = await sdk.FindProduct({
    id: params.productId,
    first: 3,
  });
  return { product };
};

const Product: VFC = () => {
  const { product } = useLoaderData<FindProductQuery>();
  return (
    <Layout>
      <Heading>{product?.title}</Heading>
      <Table>
        <Tbody>
          {product?.variants.edges[0].node.selectedOptions.map(
            (option) => (
              <Tr>
                <Td>{option.name}</Td>
                <Td>{option.value}</Td>
              </Tr>
            ),
          )}
        </Tbody>
      </Table>
    </Layout>
  );
};
export default Product;
