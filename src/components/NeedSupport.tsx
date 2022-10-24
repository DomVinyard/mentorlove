import { Box, HStack, VStack, Avatar, Text, Image } from "@chakra-ui/react";
import Arrow from "../assets/redarrow.png";
import Mentor1 from "../assets/one.png";
import Mentor5 from "../assets/mentor5.png";
import Mentor6 from "../assets/mentor6.png";
import Jose from "../assets/jose.png";
import Dom from "../assets/dom.png";

function NeedSupport() {
  return (
    <VStack spacing={4}>
      <HStack
        spacing={0}
        w={{ base: "350px", sm: "90%", md: "90%", lg: "90%" }}
        mt="-25px"
      >
        <Box
          w={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
          h={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
          bg="#EFDCDB"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            name="Jose"
            src={Jose}
            p={{ base: "0", sm: "1", md: "2" }}
            boxSize={{ base: "2.5em", sm: "50px", md: "5em" }}
          />
        </Box>
        <Box
          pl={{ base: "4px", sm: "8px", md: "8px" }}
          w={{ base: "240px", sm: "430px", md: "510px", lg: "630px" }}
          h={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
          bg="#F5F5F5"
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="center"
          fontSize={{ base: "10px", sm: "14px", md: "20px", lg: "22px" }}
        >
          <Text fontWeight="bold">Jose</Text>
          <Text display="flex" flexDirection="row" alignItems="center">
            <Image
              src={Arrow}
              boxSize={{ base: "10px", sm: "10px", md: "18px" }}
              mr={{ base: "4px", md: "8px" }}
            />
            Did not submit latest task on time
          </Text>
        </Box>
        <Box
          bg="#F5F5F5"
          w={{ base: "50px", sm: "50px", md: "100px", lg: "110px" }}
          h={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            name="Mentor"
            src={Mentor1}
            boxSize={{ base: "1.5em", sm: "1.5em", md: "2em" }}
          />
          <Text fontSize={{ base: "7px", sm: "7px", md: "12px" }}>
            4 days ago
          </Text>
        </Box>
      </HStack>

      <HStack
        spacing={0}
        w={{ base: "350px", sm: "90%", md: "90%", lg: "90%" }}
        mt="-25px"
      >
        <Box
          w={{ base: "60px", sm: "60px", md: "105px", lg: "110px" }}
          h={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
          bg="#EFDCDB"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            name="Dom"
            src={Dom}
            p={{ base: "0", sm: "1", md: "2" }}
            boxSize={{ base: "2.5em", md: "5em" }}
          />
        </Box>
        <Box
          pl={{ base: "4px", sm: "8px", md: "8px" }}
          w={{ base: "240px", sm: "430px", md: "510px", lg: "630px" }}
          h={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
          bg="#F5F5F5"
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="center"
          fontSize={{ base: "10px", sm: "14px", md: "20px", lg: "22px" }}
        >
          <Text fontWeight="bold">Dom</Text>
          <Text display="flex" flexDirection="row" alignItems="center">
            <Image
              src={Arrow}
              boxSize={{ base: "10px", md: "18px" }}
              mr={{ base: "4px", md: "8px" }}
            />{" "}
            Needs help with time management
          </Text>
        </Box>
        <Box
          position="relative"
          bg="#F5F5F5"
          w={{ base: "50px", sm: "60px", md: "105px", lg: "110px" }}
          h={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
        >
          <Avatar
            name="Mentor"
            src={Mentor5}
            boxSize={{ base: "1.5em", md: "2em" }}
            right={{ base: "20px", md: "50px" }}
            top={{ base: "15px", md: "25px" }}
            position={"absolute"}
          />
          <Avatar
            name="Mentor"
            src={Mentor6}
            boxSize={{ base: "1.5em", md: "2em" }}
            right={{ base: "5px", md: "25px" }}
            top={{ base: "15px", md: "25px" }}
            position={"absolute"}
          />
          <Text
            fontSize={{ base: "7px", sm: "6px", md: "12px" }}
            position={"absolute"}
            right={{ base: "10px", md: "30px" }}
            top={{ base: "45px", md: "70px" }}
          >
            20 mins ago
          </Text>
        </Box>
      </HStack>
    </VStack>
  );
}

export default NeedSupport;
