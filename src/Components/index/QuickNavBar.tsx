import { Button, Flex, Link, Text } from "@chakra-ui/react";

import { FaDownload } from "react-icons/fa";
import React from "react";
import filesFromWeb from "../../Constants/FilesFromWeb";

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
        boxShadow={"lg"}
        borderWidth="thin"
        borderColor="blackAlpha.200"
        h={"20"}
      >
        <Flex flex={1} align="center" justify="center">
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
        </Flex>
      </Button>
      <Link
        href={filesFromWeb.myResume}
        style={{ textDecoration: "none" }}
        isExternal={true}
      >
        <Button
          variant="solid"
          bg="blackAlpha.800"
          color="white"
          colorScheme="blackAlpha"
          h={"20"}
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
            DOWNLOAD RESUME
          </Text>
        </Button>
      </Link>
    </Flex>
  );
};
