import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";

import React from "react";
import { SiIndeed } from "react-icons/si";

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
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/romeo-angeles-jr-a88a021a9/"
            );
          }}
        />
        <IconButton
          aria-label="github"
          icon={<FaGoogle />}
          borderRadius="full"
          colorScheme="red"
          onClick={() => {
            window.open("mailto:romeoangeles010517@gmail.com");
          }}
        />
        <IconButton
          aria-label="github"
          icon={<FaTwitter />}
          borderRadius="full"
          colorScheme="twitter"
          onClick={() => {
            window.open("https://twitter.com/OwlRepo");
          }}
        />
        <IconButton
          aria-label="github"
          icon={<FaGithub />}
          borderRadius="full"
          colorScheme="blackAlpha"
          onClick={() => {
            window.open("https://github.com/OwlRepo");
          }}
        />
        <IconButton
          aria-label="github"
          icon={<SiIndeed />}
          borderRadius="full"
          colorScheme="blue"
          onClick={() => {
            window.open("https://my.indeed.com/p/romeoa-zd4nufh");
          }}
        />
      </HStack>
    </Flex>
  );
};
