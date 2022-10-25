import {
  Center,
  Box,
  Flex,
  VStack,
  Image,
  Text,
  Avatar,
  Stack,
} from "@chakra-ui/react";
import { strings, trainees } from "../data";
import { Inner, Title } from "../App";

const shiftAmountPx = 24;

function TraineeCard({
  name,
  imgSrc,
  caption,
  arrowIcon,
  background,
  mentors,
  shift,
  latestUpdate,
}: any) {
  return (
    <Flex
      bg="#F5F5F5"
      boxShadow={"0px 2px 2px rgba(0, 0, 0, 0.2)"}
      maxW={"600px"}
      w={"90%"}
      marginTop={shift === "up" ? `-${shiftAmountPx}px !important` : 0}
      marginBottom={shift === "down" ? `-${shiftAmountPx}px !important` : 0}
    >
      <Center bg={background} alignItems="center" justifyContent="center">
        <Avatar
          name={name}
          src={`avatars/${imgSrc}`}
          p={{ base: 2, md: 2 }}
          w={{ base: 16, md: 20 }}
          h={{ base: 16, md: 20 }}
        />
      </Center>
      <Stack
        spacing={0}
        p={{ base: 1, md: 3 }}
        pl={{ base: 3, md: 5 }}
        flexGrow={1}
        w={"100%"}
        justifyContent="center"
      >
        <Text fontWeight="bold" pt={1}>
          {name}
        </Text>
        <Text
          display="flex"
          pb={2}
          flexDirection="row"
          alignItems="center"
          fontSize={{ base: "sm", md: "md" }}
        >
          {arrowIcon && (
            <Image
              src={`images/${arrowIcon}`}
              height={{ base: "15px", md: "15px" }}
              mr={{ base: "4px", md: "4px" }}
            />
          )}
          {caption}
        </Text>
      </Stack>
      <Stack
        w={{ base: "80px", md: "110px" }}
        mr={2}
        alignItems="center"
        justifyContent={"center"}
        p={3}
        spacing={0.5}
      >
        <Flex>
          {mentors.map((mentor: any) => (
            <Avatar
              name={name}
              src={`avatars/${mentor}`}
              ml={-1}
              mr={-1}
              w={{ base: 6, md: 8 }}
              h={{ base: 6, md: 8 }}
            />
          ))}
        </Flex>
        <Text fontSize={10} display={{ base: "none", md: "block" }}>
          {latestUpdate}
        </Text>
      </Stack>
    </Flex>
  );
}

const TraineeCards = ({ trainees, colors }: any) => (
  <Box py={`${shiftAmountPx || 0}px`}>
    <VStack spacing={4} bg={colors.sectionBg}>
      {trainees.map((trainee: any, i: number) => {
        const shift = i === 0 ? "up" : i === trainees.length - 1 && "down";
        return (
          <TraineeCard
            background={colors.traineeBg}
            {...trainee}
            shift={shift}
          />
        );
      })}
    </VStack>
  </Box>
);

const SectionTrainees = () => (
  <Box id="features">
    <Inner fullOnMobile>
      <Box>
        <Inner>
          <Title text={strings.traineeList.title1} color={"green.700"} />
        </Inner>
        <TraineeCards
          trainees={trainees.positive}
          colors={{ sectionBg: "green.100", traineeBg: "green.500" }}
        />
      </Box>
      <Inner>
        <Title text={strings.traineeList.title2} color={"red.500"} />
      </Inner>
      <TraineeCards
        trainees={trainees.negative}
        colors={{ sectionBg: "red.100", traineeBg: "red.300" }}
      />
    </Inner>
  </Box>
);

export default SectionTrainees;
