import { Flex, Link, Image, VStack, Heading, Box } from "@chakra-ui/react";
import Classroom from "../../../assets/classroom.png";
import Github from "../../../assets/github.png";
import Codewars from "../../../assets/codewars.png";
import Schology from "../../../assets/schoology.png";

function TraineeData() {
  return (
    <VStack
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={{ base: "150px", sm: "100px", md: "100px", lg: "100px" }}
    >
      <Box
        maxW="940px"
        width={{ base: "350px", sm: "430px", md: "560px", lg: "630px" }}
        mb="40px"
      >
        <Heading
          size={{ base: "xl", sm: "2xl", md: "xl", lg: "xl" }}
          textAlign={"center"}
          color="#2A87A9"
        >
          Automatically enrich trainee data with pre-built or custom
          integrations
        </Heading>
      </Box>
      <Flex
        bg="#EFFAFE"
        maxW="940px"
        width={"full"}
        h={{ base: "140px", md: "180px" }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Link>
          <Image
            src={Classroom}
            alt="classroom"
            boxSize={{ base: "60px", md: "100px" }}
            objectFit="cover"
          />
        </Link>
        <Link>
          <Image
            src={Github}
            alt="github"
            boxSize={{ base: "60px", md: "100px" }}
          />
        </Link>
        <Link>
          <Image
            src={Codewars}
            alt="codewars"
            boxSize={{ base: "60px", md: "100px" }}
          />
        </Link>
        <Link>
          <Image
            src={Schology}
            alt="schology"
            boxSize={{ base: "60px", md: "100px" }}
          />
        </Link>
      </Flex>
    </VStack>
  );
}

export default TraineeData;
