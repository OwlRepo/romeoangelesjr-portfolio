import { NextPage, NextPageContext } from "next";
import { useEffect, useState } from "react";

import Head from "next/head";
import { Text } from "@chakra-ui/react";
// import { NavigationBar } from "../src/Components/index/NavigationBar";
// import { useWindowSize } from "../src/CustomHooks/useWindowSize";
import dynamic from "next/dynamic";

const Body = dynamic(() => import("../src/Components/index/Body"), {
  ssr: false,
});

// interface Props {
//   json: String;
// }

const Home = () => {
  return (
    <>
      <Head>
        <title>Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Text>{props.json}</Text> */}
      <Body />
    </>
  );
};

export default Home;

// Home.getInitialProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/hello");
//   const parsedJSON = res.json();
//   const stringData = await parsedJSON.then((val) => {
//     return val.name;
//   });
//   return { json: JSON.stringify(stringData) };
// };
