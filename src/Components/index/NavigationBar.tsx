import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";

import { FaDownload } from "react-icons/fa";
import React from "react";
import filesFromWeb from "../../Constants/FilesFromWeb";

export const NavigationBar = () => {
  return (
    <>
      <Flex align="center" justify="space-around" pt="10" pr="5">
        <Spacer />
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

        <Spacer />
        <Link
          href={filesFromWeb.myResume}
          style={{ textDecoration: "none" }}
          isExternal={true}
        >
          <Button {...props.downloadResumeButtonProps}>
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

        <Spacer />
      </Flex>
    </>
  );
};

const props = {
  downloadResumeButtonProps: {
    variant: "solid",
    bg: "blackAlpha.800",
    color: "white",
    colorScheme: "blackAlpha",
    pt: "10",
    pb: "10",
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
