import { Box, HStack, VStack, Avatar, Text, Image } from "@chakra-ui/react";
import Arrow from "../assets/arrow.png";
import Maria from "../assets/maria.png";
import Mentor1 from "../assets/one.png";
import Luca from "../assets/luca.png";
import Mentor2 from "../assets/mentor2.png";
import Mentor3 from "../assets/mentor3.png";
import Mentor4 from "../assets/mentor4.png";
import Dawn from "../assets/dawn.png";
import Mylo from "../assets/mylo.png";

function SuccessCart() {
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
          bg="#A7CCB7"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            name="Maria"
            src={Maria}
            p={{ base: "0", sm: "0", md: "2" }}
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
          <Text fontWeight="bold">Maria</Text>
          <Text display="flex" flexDirection="row" alignItems="center">
            <Image
              src={Arrow}
              boxSize={{ base: "10px", sm: "10px", md: "18px" }}
              mr={{ base: "4px", md: "8px" }}
            />{" "}
            Helping other trainees with their coursework
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
            2 hours ago
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
          bg="#A7CCB7"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            name="Luca"
            src={Luca}
            p={{ base: "0", md: "2" }}
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
          <Text fontWeight="bold">Luca</Text>
          <Text display="flex" flexDirection="row" alignItems="center">
            <Image
              src={Arrow}
              boxSize={{ base: "10px", md: "18px" }}
              mr={{ base: "4px", md: "8px" }}
            />{" "}
            Showing excellent leadership skills
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
            src={Mentor2}
            boxSize={{ base: "1.5em", md: "2em" }}
            right={{ base: "20px", md: "50px" }}
            top={{ base: "15px", md: "25px" }}
            position={"absolute"}
          />
          <Avatar
            name="Mentor"
            src={Mentor3}
            boxSize={{ base: "1.5em", md: "2em" }}
            right={{ base: "5px", md: "25px" }}
            top={{ base: "15px", md: "25px" }}
            position={"absolute"}
          />
          <Text
            fontSize={{ base: "7px", md: "12px" }}
            position={"absolute"}
            right={{ base: "10px", md: "30px" }}
            top={{ base: "45px", md: "70px" }}
          >
            6 hours ago
          </Text>
        </Box>
      </HStack>

      <HStack
        spacing={0}
        w={{ base: "350px", sm: "90%", md: "90%", lg: "90%" }}
      >
        <Box
          w={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
          h={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
          bg="#A7CCB7"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            name="Dawn"
            src={Dawn}
            p={{ base: "0", sm: "0", md: "2" }}
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
          <Text fontWeight="bold">Dawn</Text>
          <Text display="flex" flexDirection="row" alignItems="center">
            <Image
              src={Arrow}
              boxSize={{ base: "10px", sm: "10px", md: "18px" }}
              mr={{ base: "4px", md: "8px" }}
            />{" "}
            Completed professional development workshop
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
            src={Mentor4}
            boxSize={{ base: "1.5em", sm: "1.5em", md: "2em" }}
          />
          <Text fontSize={{ base: "7px", sm: "7px", md: "12px" }}>
            2 days ago
          </Text>
        </Box>
      </HStack>
      <HStack
        spacing={0}
        w={{ base: "350px", sm: "90%", md: "90%", lg: "90%" }}
      >
        <Box
          w={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
          h={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
          bg="#A7CCB7"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            name="Mylo"
            src={Mylo}
            p={{ base: "0", sm: "0", md: "2" }}
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
          <Text fontWeight="bold">Mylo</Text>
          <Text display="flex" flexDirection="row" alignItems="center">
            <Image
              src={Arrow}
              boxSize={{ base: "10px", sm: "10px", md: "18px" }}
              mr={{ base: "4px", md: "8px" }}
            />{" "}
            Personal study work is up to date
          </Text>
        </Box>
        <Box
          bg="#F5F5F5"
          w={{ base: "50px", sm: "60px", md: "100px", lg: "110px" }}
          h={{ base: "60px", sm: "60px", md: "100px", lg: "110px" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            name="Mentor"
            src={Mentor2}
            boxSize={{ base: "1.5em", sm: "1.5em", md: "2em" }}
          />
          <Text fontSize={{ base: "7px", sm: "7px", md: "12px" }}>
            14 hours ago
          </Text>
        </Box>
      </HStack>
    </VStack>
  );
}

export default SuccessCart;
