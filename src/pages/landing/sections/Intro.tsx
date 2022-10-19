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
} from "@chakra-ui/react";
import BtnImg from "../../../assets/addtoslack.png";
import HomeImage from "../../../assets/imghome.png";
import M from "../../../assets/m.png";
import Classroom from "../../../assets/class.png";

function Intro() {
  return (
    <Flex
      alignItems={{base:'start',md:"center"}}
      justifyContent='center'
      w="full"
      bg="#202020"
      height={"85vh"}
      
    >
      <Flex flexDirection={{base:"column", md:"row"}} maxW="940px"  w={{base:'80%',md:"full"}}>
        <Stack height={"390px"} w={{base:'full',md:"400px"}} color="white" spacing={8} >
          <Heading fontSize={{base:'36px', md:'44px'}} pt={{base:'4',md:''}}>
            {" "}
            Help your trainees stay on track
          </Heading>
          <Text fontSize={{base:"18px", md:"28px"}}>
            The automated mentorship platform for companies and schools.
          </Text>
          <HStack spacing="20px" direction="row" align="center">
            <Button
              w={{base:'135px', md:"9em"}}
              fontSize="20px"
              bgImage={BtnImg}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
            ></Button>
            <Button
               w={{base:'135px', md:"9em"}}
              fontSize={{base:"18px", md:"20px"}}
              bgColor="gray.600"
            >
              Learn More
            </Button>
          </HStack>
        </Stack>
        <Spacer />
        <Stack height={"390px"} w={{base:'full',md:"400px"}} position="relative">
          <Image
            src={HomeImage}
            boxSize="400px"
            width={{base:'230px',md:"300px"}}
            objectFit="cover"           
          />
          <Flex
            flexDirection="column"
            pos="absolute"
            top="100"
            p="2"
            right="0"
            width="220px"
            height="130px"
            bg="#FFFFFF"
            borderRadius="xl"
          >
            <HStack>
              <Avatar src={M} p="2" />
              <Text fontWeight="bold">To Coach Sadia</Text>
            </HStack>
            <Text pl="2" pb="2" fontSize="14px">
              How is Trainee Maria doing?
            </Text>
            <HStack>
              <Button
                ml="2"
                width="90px"
                bg="gray.200"
                color="black"
                fontSize="12px"
                height="25px"
              >
                👍 On Track
              </Button>
              <Button
                width="90px"
                bg="#CE365C"
                color="white"
                fontSize="12px"
                height="25px"
              >
                Needs Support
              </Button>
            </HStack>
          </Flex>
          <Flex
            flexDirection="column"
            pos="absolute"
            top="240"
            p="2"
            right="45"
            width="220px"
            height="130px"
            bg="#FFFFFF"
            borderRadius="xl"
          >
            <HStack>
              <Avatar src={Classroom} p="2" />
              <Text fontWeight="bold"> Google Classroom</Text>
            </HStack>
            <Text pl="2" pb="2" fontSize="14px">
              Trainee Jose is falling behind
            </Text>
            <Button
              ml="2"
              width="180px"
              bg="gray.200"
              color="black"
              fontSize="12px"
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
