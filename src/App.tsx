import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import ProductTour from "./components/ProductTour";
import Intro from "./components/Intro";
import NeedSupport from "./components/NeedSupport";
import TraineeData from "./components/TraineeData";
import Success from "./components/Success";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import customTheme from "./theme";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Navbar />

    <Box>
      <Intro />
      <Success />
      <NeedSupport />
      <TraineeData />
      <ProductTour />
    </Box>
    <Footer />
  </ChakraProvider>
);
