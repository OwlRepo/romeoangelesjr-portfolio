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
    <Flex>
      <Flex
        direction={windowSize.width < 1024 ? "column" : "row"}
        h={windowSize.height}
      >
        <Banner />
        <Flex direction="column" flex={1}>
          {windowSize.width < 1024 ? <QuickNavBar /> : <NavigationBar />}
          <ContactForm />
          <Accounts />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Body;
