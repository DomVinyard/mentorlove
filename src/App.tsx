import { ChakraProvider, Flex, Spacer } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import HeaderImage from "./components/HeaderImage";
import HeaderIntro from "./components/HeaderIntro";
import Form from "./components/Form";
import Integrations from "./components/Integrations";
import Nav from "./components/Nav";
import TraineeCards from "./components/TraineeCards";
import Video from "./components/Video";

const theme = extendTheme({
  colors: {
    red: { 100: "#FEF0EF", 300: "#EFDCDB", 500: "#CB4D4D", 700: "#CE365C" },
    grey: { 200: "#1C1C1C", 300: "#F5F5F5", 700: "#4E5462", 900: "#202020" },
    green: { 300: "#B9DECC", 500: "#A7CCB7", 700: "#1B7B45" },
    blue: { 100: "#EFFAFE", 300: "#4E5462", 500: "#2A87A9" },
  },
});

const Inner = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box maxW={{ base: "90%", lg: "860px" }} marginX="auto">
      {children}
    </Box>
  );
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box h={"100vh"} background="grey.900">
      <Inner>
        <Nav />
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
            <HeaderIntro />
            <Spacer />
            <HeaderImage />
          </Flex>
        </Flex>
      </Inner>
    </Box>
    <Box minH={"100vh"}>
      <Inner>
        <TraineeCards />
        <Integrations />
        <Video />
      </Inner>
    </Box>
    <Flex h={"100vh"} background="grey.900" alignItems={"center"}>
      <Inner>
        <Form />
      </Inner>
    </Flex>
  </ChakraProvider>
);
