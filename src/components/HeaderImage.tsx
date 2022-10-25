import {
  Stack,
  Text,
  Button,
  Image,
  Flex,
  HStack,
  Avatar,
} from "@chakra-ui/react";
const HeaderImage = () => {
  return (
    <Stack
      height={"390px"}
      w={{ base: "full", sm: "full", md: "400px" }}
      position="relative"
      mt={{ base: "60px", sm: "60px", md: "0px", lg: "0px" }}
      fontSize={{ base: "14px", sm: "14px", md: "12px", lg: "14px" }}
      translateX={12}
    >
      <Image
        src={"assets/imghome.png"}
        boxSize={{ base: "400px", sm: "440px", md: "400px", lg: "400px" }}
        width={{ base: "250px", sm: "80%", md: "300px", lg: "300px" }}
        objectFit="cover"
      />
      <Flex
        flexDirection="column"
        pos="absolute"
        top={{ base: "100", sm: "125", md: "100", lg: "100" }}
        p={{ base: "2", sm: "2", md: "2" }}
        right="0"
        width={{ base: "220px", sm: "240px", md: "200px", lg: "230px" }}
        height={{ base: "130px", sm: "130px", md: "130px", lg: "130px" }}
        bg="#FFFFFF"
        borderRadius="xl"
      >
        <HStack>
          <Avatar src={"assets/m.png"} p="2" />
          <Text fontWeight="bold">To Coach Sadia</Text>
        </HStack>
        <Text pl="2" pb="2">
          How is Trainee Maria doing?
        </Text>
        <HStack>
          <Button
            ml="2"
            width={{ base: "90px", sm: "110px" }}
            bg="gray.200"
            color="black"
            fontSize={"12px"}
            height="25px"
          >
            👍 On Track
          </Button>
          <Button
            width={{ base: "90px", sm: "110px" }}
            bg="#CE365C"
            color="white"
            fontSize={"12px"}
            height="25px"
            pointerEvents="none"
          >
            Needs Support
          </Button>
        </HStack>
      </Flex>
      <Flex
        flexDirection="column"
        pos="absolute"
        top={{ base: "240", sm: "275", md: "240", lg: "240" }}
        p={{ base: "2", sm: "2", md: "2" }}
        right={{ base: "30", sm: "35", md: "" }}
        width={{ base: "220px", sm: "240px", md: "200px", lg: "230px" }}
        height={{ base: "130px", sm: "120px", md: "130px", lg: "130px" }}
        bg="#FFFFFF"
        borderRadius="xl"
      >
        <HStack>
          <Avatar src={"assets/class.png"} p="2" />
          <Text fontWeight="bold"> Google Classroom</Text>
        </HStack>
        <Text pl="2" pb="2">
          Trainee Jose is falling behind
        </Text>
        <Button
          ml="2"
          width={{ base: "180px", sm: "160px", md: "160px", lg: "180px" }}
          bg="gray.200"
          color="black"
          height="25px"
        >
          Request catch-up
        </Button>
      </Flex>
    </Stack>
  );
};

export default HeaderImage;
