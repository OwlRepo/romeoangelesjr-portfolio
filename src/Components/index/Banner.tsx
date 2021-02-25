import { Flex, Image, Text } from "@chakra-ui/react";

import MyLogo from "../../assets/Mylogo";
import React from "react";
import svgImages from "../../Constants/SVGImagesFromWeb";
import { useWindowSize } from "../../CustomHooks/useWindowSize";

export const Banner = () => {
  const windowSize = useWindowSize();
  return (
    <Flex direction="column" flex={1}>
      <Flex align="center" justify="center">
        <MyLogo />
      </Flex>
      <Text
        style={{
          fontSize: windowSize.width < 1024 ? 50 : 130,
          margin: 0,
          fontWeight: "bold",
          color: "darkgrey",
        }}
      >
        INNOVATE
      </Text>
      <Text
        style={{
          fontSize: windowSize.width < 1024 ? 50 : 130,
          margin: 0,
          fontWeight: "bold",
          color: "grey",
        }}
      >
        DESIGN
      </Text>
      <Text
        style={{
          fontSize: windowSize.width < 1024 ? 50 : 130,
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
