import { Box, Flex, Heading } from "@chakra-ui/react";
import Support from "./NeedSupport";

function NeedSupport() {
  return (
    <Flex
      alignItems={"center"}
      direction={"column"}
      w="100vw"
      mt={{ base: "150px", sm: "150px", md: "125px", lg: "125px" }}
    >
      <Box
        maxW="940px"
        width={{ base: "350px", sm: "430px", md: "560px", lg: "630px" }}
        mb="65px"
      >
        <Heading
          size={{ base: "xl", sm: "2xl", md: "xl", lg: "xl" }}
          textAlign={"center"}
          color="#CB4D4D"
        >
          Automatically flag when trainees are falling behind or need support
        </Heading>
      </Box>
      <Box
        maxW="940px"
        w="full"
        height={{ base: "80px", md: "170px" }}
        bg="#FEF0EF"
      >
        <Support />
      </Box>
    </Flex>
  );
}

export default NeedSupport;
