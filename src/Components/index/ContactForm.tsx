import {
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

import useWindowSize from "../../CustomHooks/useWindowSize";

export const ContactForm = () => {
  const windowSize = useWindowSize();
  const focusNode = useRef<HTMLInputElement | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toast = useToast();

  const onEnterHandler = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (e.key === "Enter") {
      if (firstName == "" || lastName == "" || email == "" || message == "") {
        toast({
          title: "Empty fields are not allowed",
          description: "Please fill out all the fields.",
          status: "error",
          duration: 5000,
          isClosable: false,
          position: "top-right",
        });
        return;
      }

      if (re.test(email)) {
        toast({
          title: "Working on this",
          description: "You can try to contact me on my accounts below.",
          status: "info",
          duration: 9000,
          isClosable: false,
          position: "top-right",
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        toast({
          title: "Invalid Email",
          description: "Please check your email.",
          status: "error",
          duration: 5000,
          isClosable: false,
          position: "top-right",
        });
      }
    }
  };

  const onSubmitButtonHandler = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (firstName == "" || lastName == "" || email == "" || message == "") {
      toast({
        title: "Empty fields are not allowed",
        description: "Please fill out all the fields.",
        status: "error",
        duration: 5000,
        isClosable: false,
        position: "top-right",
      });
      return;
    }

    if (re.test(email)) {
      toast({
        title: "Working on this",
        description: "You can try to contact me on my accounts below.",
        status: "info",
        duration: 9000,
        isClosable: false,
        position: "top-right",
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } else {
      toast({
        title: "Invalid Email",
        description: "Please check your email.",
        status: "error",
        duration: 5000,
        isClosable: false,
        position: "top-right",
      });
    }
  };
  return (
    <Flex flex={1} direction="column" mt="10" mb={"5"}>
      <Flex
        direction="column"
        p={"7"}
        mr={windowSize.width < 1300 ? "2" : "20"}
        ml={windowSize.width < 1300 ? "2" : "20"}
      >
        <Heading>CONTACT ME</Heading>
        <Text mb={"2.5"}>Hello there! Lets talk and make it happen.</Text>
      </Flex>

      <Flex
        direction="column"
        p={"7"}
        mr={windowSize.width < 1300 ? "2" : "20"}
        ml={windowSize.width < 1300 ? "2" : "20"}
        borderRadius={10}
        boxShadow="xl"
        borderWidth={"thin"}
        borderColor={"blackAlpha.200"}
      >
        <HStack spacing={5} mb="5">
          <Input
            placeholder="Firstname"
            ref={focusNode}
            bg="white"
            pt={6}
            pb={6}
            onChange={(value) => {
              setFirstName(value.target.value);
              setLastName(firstName);
            }}
            onKeyPress={(e) => {
              onEnterHandler(e);
            }}
          />
          <Input
            placeholder="Lastname"
            ref={focusNode}
            bg="white"
            pt={6}
            pb={6}
            onChange={(value) => {
              setLastName(value.target.value);
            }}
            onKeyPress={(e) => {
              onEnterHandler(e);
            }}
          />
        </HStack>
        <VStack spacing={5} mb="5">
          <Input
            placeholder="Email"
            ref={focusNode}
            bg="white"
            pt={6}
            pb={6}
            onChange={(value) => {
              setEmail(value.target.value);
            }}
            onKeyPress={(e) => {
              onEnterHandler(e);
            }}
          />
          <Textarea
            placeholder="Message"
            bg="white"
            size="md"
            resize={"vertical"}
            onChange={(value) => {
              setMessage(value.target.value);
            }}
            onKeyPress={(e) => {
              onEnterHandler(e);
            }}
          />
        </VStack>
        <Button
          bg="blackAlpha.800"
          color="white"
          colorScheme="blackAlpha"
          h={"16"}
          onKeyPress={(e) => {
            onEnterHandler(e);
          }}
          onClick={onSubmitButtonHandler}
        >
          <Text>SUBMIT</Text>
        </Button>
      </Flex>
    </Flex>
  );
};
