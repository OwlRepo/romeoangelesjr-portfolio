import { Accounts } from "./Accounts";
import { Banner } from "./Banner";
import { ContactForm } from "./ContactForm";
import { Flex } from "@chakra-ui/react";
import { NavigationBar } from "./NavigationBar";
import { QuickNavBar } from "./QuickNavBar";
import React from "react";
import useWindowSize from "../../CustomHooks/useWindowSize";

const Body = () => {
  const windowSize = useWindowSize();
  return (
    <Flex bgGradient={"linear(to-b, gray,white, white)"}>
      <Flex
        direction={windowSize.width < 800 ? "column" : "row"}
        h={windowSize.height}
      >
        <Banner />
        <Flex direction="column" flex={1}>
          {windowSize.width < 800 ? <QuickNavBar /> : <NavigationBar />}
          <ContactForm />
          <Accounts />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Body;
