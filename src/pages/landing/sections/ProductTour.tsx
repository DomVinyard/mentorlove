import { Flex, VStack, Heading, Box, Image, Text } from "@chakra-ui/react";
import Product from "../../../assets/product.png";

function ProductTour() {
  return (
    <VStack
      w="full"
      h="700px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      pb="8em"
    >
      <Box w="60vw">
        <Heading
          fontSize={"40px"}
          textAlign={"center"}
          pb="1em"
          color="#2A87A9"
        >
          Mentor’s chatbot lives right inside Slack for instant check-ins
        </Heading>
      </Box>
      <Flex bg="#F5F5F5" w="80vw" justifyContent="center" alignItems="center">
        <Box w="40vw" py="3em">
          <Image src={Product} />
        </Box>
      </Flex>
      <Box>
        <Text>Mentor for Slack, Product Tour (5 mins)</Text>
      </Box>
    </VStack>
  );
}

export default ProductTour;
