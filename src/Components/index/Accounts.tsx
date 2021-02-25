import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";

import React from "react";

export const Accounts = () => {
  return (
    <Flex direction="column" flex={1} align="center" justify="center" mb="10">
      <Text mb="5" fontWeight="bold">
        My Accounts
      </Text>
      <HStack spacing={5}>
        <IconButton
          aria-label="github"
          icon={<FaLinkedin />}
          borderRadius="full"
          colorScheme="linkedin"
        />
        <IconButton
          aria-label="github"
          icon={<FaGoogle />}
          borderRadius="full"
          colorScheme="red"
        />
        <IconButton
          aria-label="github"
          icon={<FaTwitter />}
          borderRadius="full"
          colorScheme="twitter"
        />
        <IconButton
          aria-label="github"
          icon={<FaGithub />}
          borderRadius="full"
          colorScheme="blackAlpha"
        />
      </HStack>
    </Flex>
  );
};
