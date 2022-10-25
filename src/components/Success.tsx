import { Box, Flex, Heading } from "@chakra-ui/react";
import SuccessCart from "./SuccessCart";

function Success() {
  return (
    <Box
      id="features"
      width="100%"
      mt={{ base: "150px", sm: "150px", md: "100px", lg: "100px" }}
    >
      <Flex
        alignItems={"center"}
        direction={"column"}
        justifyContent={"center"}
      >
        <Box
          width={{ base: "350px", sm: "430px", md: "560px", lg: "630px" }}
          mb="65px"
          maxW="940px"
        >
          <Heading
            size={{ base: "xl", sm: "2xl", md: "xl", lg: "xl" }}
            textAlign={"center"}
            color="rgba(27, 123, 69, 1)"
          >
            Get automatic trainee updates from mentors, coaches and teachers
          </Heading>
        </Box>
        <Box
          maxW="940px"
          width="100%"
          height={{ base: "240px", md: "395px", lg: "430px" }}
          bg="rgba(185, 222, 204, 0.46)"
        >
          <SuccessCart />
        </Box>
      </Flex>
    </Box>
  );
}

export default Success;
