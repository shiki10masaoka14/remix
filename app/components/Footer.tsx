import {
  Container,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react";
import { memo, VFC } from "react";

// ここまで「import」
//
//
//
// ここから

export const Footer: VFC = memo(() => {
  return (
    <Container maxW={"1040px"} mb={"20px"}>
      <HStack justify={"space-between"}>
        <HStack spacing={4}>
          <Link href={"https://www.instagram.com/"}>
            INSTAGRAM
          </Link>
          <Link href={"https://twitter.com/"}>TWITTER</Link>
          <Link href={"https://www.facebook.com/"}>
            FACEBOOK
          </Link>
        </HStack>
        <Text fontSize={"14px"}>© Furniture Design</Text>
      </HStack>
    </Container>
  );
});
Footer.displayName = "Footer";
