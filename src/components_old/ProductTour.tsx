import { Flex, VStack, Box, Image, Text } from "@chakra-ui/react";
import { Title } from "../components/Title";
import { strings } from "../data";

function ProductTour() {
  return (
    <VStack
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={{ base: "150px", sm: "100px", md: "100px", lg: "100px" }}
    >
      <Title color="grey.200" text={strings.video.title} />
      <Flex
        bg="#F5F5F5"
        w="full"
        maxW="940px"
        justifyContent="center"
        alignItems="center"
      >
        <Box w={{ base: "70%", md: "40%" }} py="50px">
          <Image src={"../assets/product.png"} />
        </Box>
      </Flex>
      <Box>
        <Text>{strings.video.caption}</Text>
      </Box>
    </VStack>
  );
}

export default ProductTour;
