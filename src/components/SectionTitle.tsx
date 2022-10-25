import { Heading } from "@chakra-ui/react";

const SectionTitle = ({ text, color }: { text: string; color: string }) => (
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

export default SectionTitle;
