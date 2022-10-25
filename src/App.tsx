import {
  Center,
  ChakraProvider,
  Flex,
  VStack,
  Image,
  Text,
  Stack,
  Grid,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import HeaderImage from "./components/HeaderImage";
import HeaderIntro from "./components/HeaderIntro";
import EmailForm from "./components/EmailForm";
import Nav from "./components/Nav";
import TraineeCards from "./components/TraineeCards";
import SectionTitle from "./components/SectionTitle";
import { strings, trainees } from "./data";
import IntegrationGridItem from "./components/IntegrationGridItem";
import Inner from "./components/Inner";
import SectionHeader from "./sections/Header";

const theme = extendTheme({
  colors: {
    red: { 100: "#FEF0EF", 300: "#EFDCDB", 500: "#CB4D4D", 700: "#CE365C" },
    grey: { 200: "#1C1C1C", 300: "#F5F5F5", 700: "#4E5462", 900: "#202020" },
    green: { 100: "#DFF0E8", 300: "#B9DECC", 500: "#A7CCB7", 700: "#1B7B45" },
    blue: { 100: "#EFFAFE", 300: "#4E5462", 500: "#2A87A9" },
  },
});

const SectionTrainees = () => (
  <Box id="features">
    <Inner fullOnMobile>
      <Box>
        <Inner>
          <SectionTitle text={strings.traineeList.title1} color={"green.700"} />
        </Inner>
        <TraineeCards
          trainees={trainees.positive}
          colors={{ sectionBg: "green.100", traineeBg: "green.500" }}
        />
      </Box>
      <Inner>
        <SectionTitle text={strings.traineeList.title2} color={"red.500"} />
      </Inner>
      <TraineeCards
        trainees={trainees.negative}
        colors={{ sectionBg: "red.100", traineeBg: "red.300" }}
      />
    </Inner>
  </Box>
);

const SectionIntegrations = () => (
  <>
    <Inner>
      <SectionTitle text={strings.integrations.title} color="#2A87A9" />
    </Inner>
    <Inner fullOnMobile>
      <VStack
        w="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          bg="#EFFAFE"
          width={"full"}
          gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gridGap={{ base: 8, md: 8 }}
          p={8}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <IntegrationGridItem filename="classroom" label="Google Classroom" />
          <IntegrationGridItem filename="github" label="Github" />
          <IntegrationGridItem filename="codewars" label="CodeWars" />
          <IntegrationGridItem filename="schoology" label="Schoology" />
        </Grid>
      </VStack>
    </Inner>
  </>
);

const SectionProductTour = () => (
  <VStack w="full" display="flex" justifyContent="center" alignItems="center">
    <Inner>
      <SectionTitle color="grey.200" text={strings.video.title} />
    </Inner>
    <Inner fullOnMobile>
      <Center bg={"grey.300"} py="50px">
        <Image
          cursor="pointer"
          onClick={() => alert("Product tour cominng soon")}
          src={"images/video_thumb.png"}
          w={{ base: "80%", md: "40%" }}
        />
      </Center>
    </Inner>
    <Text>{strings.video.caption}</Text>
  </VStack>
);

const SectionPricing = () => (
  <Flex
    id="pricing"
    h={"100vh"}
    background="grey.900"
    alignItems={"center"}
    mt={{ base: 32, md: 48 }}
  >
    <Inner>
      <EmailForm />
    </Inner>
  </Flex>
);

export const App = () => (
  <ChakraProvider theme={theme}>
    <SectionHeader />
    <SectionTrainees />
    <SectionIntegrations />
    <SectionProductTour />
    <SectionPricing />
  </ChakraProvider>
);
