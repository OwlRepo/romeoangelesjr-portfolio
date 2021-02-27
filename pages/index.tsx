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

import { Accounts } from "../src/Components/index/Accounts";
import { Banner } from "../src/Components/index/Banner";
import { ContactForm } from "../src/Components/index/ContactForm";
import Head from "next/head";
// import { NavigationBar } from "../src/Components/index/NavigationBar";
import { QuickNavBar } from "../src/Components/index/QuickNavBar";
// import { useWindowSize } from "../src/CustomHooks/useWindowSize";
import dynamic from "next/dynamic";

const Body = dynamic(() => import("../src/Components/index/Body"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body />
    </>
  );
}
