import { Flex, Text } from "@chakra-ui/react";

import { BannerLogo } from "./BannerLogo";
import React from "react";
import useWindowSize from "../../CustomHooks/useWindowSize";

// import MyLogo from '-!svg-react-loader!../../src/assets/svg/mylogo.svg';

// const MyLogo = require("-!svg-react-loader!../../assets/svg/mylogo.svg") as string;

export const Banner = () => {
  const windowSize = useWindowSize();

  return (
    <Flex direction="column" flex={1}>
      <Flex align="center" justify="center">
        {/* <img src={MyLogo} height={250} width={250} /> */}
        <BannerLogo />
        {/* <Image src={svgImages.svgLogo} h={250} w={250}/> */}
      </Flex>
      <Text
        style={{
          fontSize: windowSize.width < 800 ? 50 : 130,
          margin: 0,
          fontWeight: "bold",
          color: "darkgrey",
        }}
      >
        INNOVATE
      </Text>
      <Text
        style={{
          fontSize: windowSize.width < 800 ? 50 : 130,
          margin: 0,
          fontWeight: "bold",
          color: "grey",
        }}
      >
        DESIGN
      </Text>
      <Text
        style={{
          fontSize: windowSize.width < 800 ? 50 : 130,
          margin: 0,
          fontWeight: "bold",
          color: "black",
        }}
      >
        BUILD
      </Text>
    </Flex>
  );
};
