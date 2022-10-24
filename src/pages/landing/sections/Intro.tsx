import {
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Flex,
  HStack,
  Avatar,
  Spacer,
  Link,
} from "@chakra-ui/react";
import BtnImg from "../../../assets/addtoslack.png";
import HomeImage from "../../../assets/imghome.png";
import M from "../../../assets/m.png";
import Classroom from "../../../assets/class.png";

function Intro() {
  return (
    <Flex
      alignItems={{ base: "start", md: "center" }}
      justifyContent="center"
      w="full"
      bg="#202020"
      height={"85vh"}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        maxW="940px"
        mt={{ base: "70px", sm: "70px", md: "0px", lg: "0px" }}
        width={{ base: "80%", sm: "80%", md: "90%", lg: "100%" }}
      >
        <Stack
          height={"390px"}
          w={{ base: "full", sm: "full", md: "380px", lg: "400px" }}
          color="white"
          spacing={8}
        >
          <Heading
            fontSize={{ base: "36px", sm: "36px", md: "36px", lg: "44px" }}
            fontWeight={700}
            fontStyle="bold"
          >
            Help your trainees stay on track
          </Heading>
          <Text
            fontSize={{ base: "22px", sm: "26px", md: "22px", lg: "26px" }}
            fontFamily="roboto"
            fontStyle={"regular"}
            fontWeight={400}
          >
            The automated mentorship platform for companies and schools.
          </Text>
          <HStack spacing="20px" direction="row" align="center">
            <Link href="#pricing">
              <Button
                width={{ base: "140px", sm: "170px", md: "140px", lg: "200px" }}
                bgImage={BtnImg}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                height={{ base: "40px", sm: "50px", md: "45px", lg: "50px" }}
               pointerEvents="none"

              ></Button>
            </Link>
            <Link href="#features"  textDecoration={"none"}>
              {" "}
              <Button
                width={{ base: "140px", sm: "170px", md: "144px", lg: "200px" }}
                fontSize={{ base: "18px", sm: "20px", md: "18px", lg: "24px" }}
              bg="rgba(196, 196, 196, 0.22)"
                height={{ base: "40px", sm: "50px", md: "45px", lg: "50px" }}
               pointerEvents="none"
              
              >
                Learn More
              </Button>
            </Link>
          </HStack>
        </Stack>
        <Spacer />
        <Stack
          height={"390px"}
          w={{ base: "full", sm: "full", md: "400px" }}
          position="relative"
          mt={{ base: "60px", sm: "60px", md: "0px", lg: "0px" }}
          fontSize={{ base: "14px", sm: "14px", md: "12px", lg: "14px" }}
        >
          <Image
            src={HomeImage}
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
              <Avatar src={M} p="2" />
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
              <Avatar src={Classroom} p="2" />
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
      </Flex>
    </Flex>
  );
}

export default Intro;
