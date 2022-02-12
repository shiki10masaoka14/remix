import { Footer } from "./Footer";
import { Header } from "./Header";
import { Flex, Spacer } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

// ここまで「import」
//
//
//
// ここから

type PROPS = {
  children: ReactNode;
};

export const Layout: VFC<PROPS> = memo(({ children }) => {
  return (
    <Flex minH={"100vh"} direction={"column"}>
      <Header />
      {children}
      <Spacer />
      <Footer />
    </Flex>
  );
});
Layout.displayName = "Layout";
