import { Center, Heading } from "@chakra-ui/react";
import { VFC } from "react";
import { Layout } from "~/components/Layout";

const Index: VFC = () => {
  return (
    <Layout>
      <Center>
        <Heading>Hello, world!</Heading>
      </Center>
    </Layout>
  );
};
export default Index;
