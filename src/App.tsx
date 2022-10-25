import { Box, Heading, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Header from "./sections/Header";
import Trainees from "./sections/Trainees";
import Integrations from "./sections/Integrations";
import ProductTour from "./sections/ProductTour";
import Pricing from "./sections/Pricing";

const theme = extendTheme({
  colors: {
    red: { 100: "#FEF0EF", 300: "#EFDCDB", 500: "#CB4D4D", 700: "#CE365C" },
    grey: { 200: "#1C1C1C", 300: "#F5F5F5", 700: "#4E5462", 900: "#202020" },
    green: { 100: "#DFF0E8", 300: "#B9DECC", 500: "#A7CCB7", 700: "#1B7B45" },
    blue: { 100: "#EFFAFE", 300: "#4E5462", 500: "#2A87A9" },
  },
});

export const strings = {
  header: {
    title: "Help your trainees stay on track",
    subtitle: "The automated mentorship platform for companies and schools.",
    more: "Learn more",
  },
  traineeList: {
    title1: "Get automatic trainee updates from mentors, coaches and teachers",
    title2:
      "Automatically flag when trainees are falling behind or need support",
  },
  integrations: {
    title:
      "Automatically enrich trainee data with pre-built or custom integrations",
  },
  video: {
    title: "Mentor’s chatbot lives right inside Slack for instant check-ins",
    caption: "Mentor for Slack, Product Tour (5 mins)",
  },
  form: {
    title: "Mentor is invite-only",
    placeholder: "you@email.com",
    button: "Request access",
  },
};

export const breakpointPx = 900;
export const Inner = ({ children, fullOnMobile }: InnerProps) => (
  <Box
    maxW={{ base: fullOnMobile ? "100%" : "90%", md: `${breakpointPx}px` }}
    w={fullOnMobile ? "100%" : "90%"}
    marginX="auto"
    children={children}
  />
);

export const Title = ({ text, color }: TitleProps) => (
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

type InnerProps = {
  children: React.ReactNode;
  fullOnMobile?: boolean;
};

type TitleProps = {
  text: string;
  color: string;
};
