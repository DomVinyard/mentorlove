import { Heading } from "@chakra-ui/react";

export const Title = ({ text, color }: { text: string; color: string }) => (
  <Heading
    size={{ base: "xl", sm: "2xl", md: "xl", lg: "xl" }}
    textAlign={"center"}
    color={color}
    children={text}
    mb={4}
  />
);
