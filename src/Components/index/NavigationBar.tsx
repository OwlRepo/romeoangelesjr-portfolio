import { Button, Flex, Link, Text } from "@chakra-ui/react";

import { FaDownload } from "react-icons/fa";
import React from "react";
import filesFromWeb from "../../Constants/FilesFromWeb";
import { useWindowSize } from "../../CustomHooks/useWindowSize";

export const NavigationBar = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <Flex align="center" justify="space-between" pt="10" pr="5">
        <Button variant="ghost">
          <Text
            style={{
              fontSize: 30,
              margin: 0,
              fontWeight: "bold",
              color: "black",
            }}
          >
            ABOUT ME
          </Text>
        </Button>
        <Button variant="ghost" colorScheme="blackAlpha" color="black">
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
            pt={"10"}
            pb="10"
          >
            <FaDownload />
            <Text
              style={{
                fontSize: 15,
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
    </>
  );
};
