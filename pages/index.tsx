import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  FaDownload,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { Accounts } from "../src/Components/index/Accounts";
import { Banner } from "../src/Components/index/Banner";
import { ContactForm } from "../src/Components/index/ContactForm";
import Head from "next/head";
import { NavigationBar } from "../src/Components/index/NavigationBar";
import { QuickNavBar } from "../src/Components/index/QuickNavBar";
import { useWindowSize } from "../src/CustomHooks/useWindowSize";

export default function Home() {
  const windowSize = useWindowSize();
  return (
    <>
      <Head>
        <title>Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={windowSize.width < 1024 ? "column" : "row"}
        h={windowSize.height}
      >
        <Banner />
        <Flex direction="column" flex={1}>
          {windowSize.width < 1024 ? <QuickNavBar /> : <NavigationBar />}
          <ContactForm />
          <Accounts />
        </Flex>
      </Flex>
    </>
  );
}
