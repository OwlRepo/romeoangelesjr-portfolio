import {
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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NextPage, NextPageContext } from "next";

import { FaDownload } from "react-icons/fa";
import React from "react";
import filesFromWeb from "../../Constants/FilesFromWeb";

export const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const AboutMeModal = () => {
    return (
      <Modal
        scrollBehavior={"inside"}
        closeOnEsc={true}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={true}
        isCentered={true}
        motionPreset={"slideInBottom"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ABOUT ME</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Front-End
            </Text>
            <Text>Mobile and Web Application Developer</Text>
            <Text>Hi! </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  return (
    <>
      <AboutMeModal />
      <Flex align="center" justify="space-between" pt="10" pr="5">
        <Button
          variant="ghost"
          colorScheme="blackAlpha"
          color="black"
          onClick={onOpen}
        >
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
