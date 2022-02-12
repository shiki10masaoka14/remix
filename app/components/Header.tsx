import {
  Container,
  Flex,
  Icon,
  Image,
  Link,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link as RemixLink } from "remix";

// ここまで「import」
//
//
//
// ここから

export const Header: VFC = memo(() => {
  return (
    <Container maxW={"1040px"}>
      <Flex
        justify={"space-between"}
        align={"center"}
        h={20}
      >
        <Link as={RemixLink} to={"/"}>
          <Image src="logo.svg" w={"180px"} />
        </Link>
        <Icon as={RiMenuUnfoldLine} fontSize={30} />
      </Flex>
    </Container>
  );
});
Header.displayName = "Header";
