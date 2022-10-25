import { Flex, VStack, Heading, Box, Image, Text } from "@chakra-ui/react";
import Product from "../assets/product.png";

function ProductTour() {
  return (
    <VStack
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={{ base: "150px", sm: "100px", md: "100px", lg: "100px" }}
    >
      <Box
        width={{ base: "350px", sm: "430px", md: "560px", lg: "630px" }}
        mb="40px"
      >
        <Heading
          size={{ base: "xl", sm: "2xl", md: "xl", lg: "xl" }}
          textAlign={"center"}
          color="#2A87A9"
        >
          Mentor’s chatbot lives right inside Slack for instant check-ins
        </Heading>
      </Box>
      <Flex
        bg="#F5F5F5"
        w="full"
        maxW="940px"
        justifyContent="center"
        alignItems="center"
      >
        <Box w={{ base: "70%", md: "40%" }} py="50px">
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
