import { Box, Heading, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Header from "./sections/Header";
import Trainees from "./sections/Trainees";
import Integrations from "./sections/Integrations";
import ProductTour from "./sections/ProductTour";
import Pricing from "./sections/Pricing";
export const breakpointPx = 900;

// Theme
const theme = extendTheme({
  colors: {
    red: { 100: "#FEF0EF", 300: "#EFDCDB", 500: "#CB4D4D", 700: "#CE365C" },
    grey: { 200: "#1C1C1C", 300: "#F5F5F5", 700: "#4E5462", 900: "#202020" },
    green: { 100: "#DFF0E8", 300: "#B9DECC", 500: "#A7CCB7", 700: "#1B7B45" },
    blue: { 100: "#EFFAFE", 300: "#4E5462", 500: "#2A87A9" },
  },
});

// Container for section content
export const Inner = ({
  children,
  fullOnMobile,
}: {
  children: React.ReactNode;
  fullOnMobile?: boolean;
}) => (
  <Box
    maxW={{ base: fullOnMobile ? "100%" : "90%", md: `${breakpointPx}px` }}
    w={fullOnMobile ? "100%" : "90%"}
    marginX="auto"
    children={children}
  />
);

// Section title
export const Title = ({ text, color }: { text: string; color: string }) => (
  <Heading
    maxW={"600px"}
    mx={"auto"}
    fontSize={{ base: 26, md: 32 }}
    textAlign={"center"}
    color={color}
    children={text}
    mb={{ base: 4, md: 8 }}
    mt={{ base: 24, md: 32 }}
  />
);

// App sections
const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Trainees />
    <Integrations />
    <ProductTour />
    <Pricing />
  </ChakraProvider>
);
export default App;
