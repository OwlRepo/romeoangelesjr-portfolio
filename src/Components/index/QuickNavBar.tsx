import { Button, Flex, Text } from "@chakra-ui/react";

import { FaDownload } from "react-icons/fa";
import React from "react";

export const QuickNavBar = () => {
  return (
    <Flex
      flex={1}
      direction="row"
      justify="space-evenly"
      align="center"
      mt={"10"}
    >
      <Button
        variant="solid"
        bg="white"
        colorScheme="blackAlpha"
        pt={"10"}
        pb={"10"}
        boxShadow={"lg"}
        borderWidth="thin"
        borderColor="blackAlpha.200"
      >
        <Text
          style={{
            fontSize: 30,
            margin: 0,
            fontWeight: "bold",
            color: "black",
          }}
        >
          PROJECTS
        </Text>
      </Button>
      <Button
        variant="solid"
        bg="blackAlpha.800"
        color="white"
        colorScheme="blackAlpha"
        pt={"10"}
        pb={"10"}
      >
        <FaDownload />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 15,
            fontWeight: "bold",
            color: "white",
          }}
        >
          RESUME
        </Text>
      </Button>
    </Flex>
  );
};
