import { Flex, Image, Text } from "@chakra-ui/react";

import React from "react";
import svgImages from "../../Constants/SVGImagesFromWeb";
import { useWindowSize } from "../../CustomHooks/useWindowSize";

export const Banner = () => {
  const windowSize = useWindowSize();
  return (
    <Flex direction="column" flex={1}>
      <Flex align="center" justify="center">
        <Image src={svgImages.svgLogo} h={250} w={400} alt="Loading..." />
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
