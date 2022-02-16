import {
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link as RemixLink } from "remix";

type PROPS = {
  product: any;
};

export const ProductCard: VFC<PROPS> = memo(
  ({ product }) => {
    return (
      <>
        <LinkBox
          key={product.node.id}
          _hover={{ opacity: 0.8 }}
        >
          <VStack>
            <Image src={product.node.featuredImage?.url} />
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
                    product.node.priceRange.maxVariantPrice
                      .amount,
                  )}
                </Text>
                <Text fontSize={14}> +tax</Text>
              </HStack>
            </VStack>
          </VStack>
        </LinkBox>
      </>
    );
  },
);
ProductCard.displayName = "ProductCard";
