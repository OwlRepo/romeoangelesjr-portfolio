import Head from "next/head";
// import { NavigationBar } from "../src/Components/index/NavigationBar";
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
