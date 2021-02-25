import {
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { useWindowSize } from "../../CustomHooks/useWindowSize";

export const ContactForm = () => {
  const windowSize = useWindowSize();
  return (
    <Flex flex={1} direction="column" mt="10" mb={"5"}>
      <Flex
        direction="column"
        p={"7"}
        mr={windowSize.width < 1024 ? "2" : "20"}
        ml={windowSize.width < 1024 ? "2" : "20"}
      >
        <Heading>CONTACT ME</Heading>
        <Text mb={"2.5"}>
          Hello there! Lets talk about it and make it happen.
        </Text>
      </Flex>

      <Flex
        direction="column"
        p={"7"}
        mr={windowSize.width < 1024 ? "2" : "20"}
        ml={windowSize.width < 1024 ? "2" : "20"}
        borderRadius={10}
        boxShadow="xl"
        borderWidth={"thin"}
        borderColor={"blackAlpha.200"}
      >
        <HStack spacing={5} mb="5">
          <Input placeholder="Firstname" bg="white" pt={6} pb={6} />
          <Input placeholder="Lastname" bg="white" pt={6} pb={6} />
        </HStack>
        <VStack spacing={5} mb="5">
          <Input placeholder="Email" bg="white" pt={6} pb={6} />
          <Textarea
            placeholder="Message"
            bg="white"
            size="md"
            resize={"vertical"}
          />
        </VStack>
        <Button
          bg="blackAlpha.800"
          color="white"
          colorScheme="blackAlpha"
          h={"16"}
        >
          <Text>SUBMIT</Text>
        </Button>
      </Flex>
    </Flex>
  );
};
