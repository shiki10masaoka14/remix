import {
  Center,
  Heading,
  Link,
  VStack,
} from "@chakra-ui/react";
import { VFC } from "react";
import { Link as RemixLink } from "remix";

const CompletionScreen: VFC = () => {
  return (
    <Center minH={"100vh"}>
      <VStack spacing={8}>
        <Heading>Your inquiry has been sent.</Heading>
        <Link as={RemixLink} to={`/`}>
          Go back to home
        </Link>
      </VStack>
    </Center>
  );
};
export default CompletionScreen;
