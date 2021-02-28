import { Button, Flex, Link, Text } from "@chakra-ui/react";

import { FaDownload } from "react-icons/fa";
import React from "react";
import filesFromWeb from "../../Constants/FilesFromWeb";
import useWindowDimensions from "../../CustomHooks/useWindowSize";

export const QuickNavBar = () => {
  const windowSize = useWindowDimensions();

  return (
    <Flex
      flex={1}
      direction="row"
      justify="space-evenly"
      align="center"
      mt={"10"}
    >
      <Button {...props.projectsButtonProps}>
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
        <Button {...props.downloadResumeButtonProps}>
          <FaDownload />
          <Text
            style={{
              fontSize: 18,
              marginLeft: 15,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {windowSize.width < 450 ? "RESUME" : "DOWNLOAD RESUME"}
          </Text>
        </Button>
      </Link>
    </Flex>
  );
};

const props = {
  downloadResumeButtonProps: {
    variant: "solid",
    bg: "blackAlpha.800",
    color: "white",
    colorScheme: "blackAlpha",
    h: "20",
  },
  projectsButtonProps: {
    variant: "solid",
    bg: "white",
    colorScheme: "gray",
    boxShadow: "lg",
    borderWidth: "thin",
    borderColor: "blackAlpha.200",
    h: "20",
  },
};
