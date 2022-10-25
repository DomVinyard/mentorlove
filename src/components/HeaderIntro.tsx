import { Heading, Stack, Text, Button, HStack, Link } from "@chakra-ui/react";
import { strings } from "../data";

const HeaderIntro = () => {
  return (
    <Stack
      height={"390px"}
      w={{ base: "full", sm: "full", md: "380px", lg: "400px" }}
      color="white"
      spacing={8}
    >
      <Heading
        fontSize={{ base: "36px", sm: "36px", md: "36px", lg: "44px" }}
        fontWeight={700}
        fontStyle="bold"
        children={strings.header.title}
      />
      <Text
        fontSize={{ base: "22px", sm: "26px", md: "22px", lg: "26px" }}
        fontFamily="roboto"
        fontStyle={"regular"}
        fontWeight={400}
        children={strings.header.subtitle}
      />
      <HStack spacing="20px" direction="row" align="center">
        <Link href="#pricing">
          <Button
            width={{ base: "140px", sm: "170px", md: "140px", lg: "200px" }}
            bgImage={"assets/addtoslack.png"}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height={{ base: "40px", sm: "50px", md: "45px", lg: "50px" }}
            pointerEvents="none"
          ></Button>
        </Link>
        <Link href="#features" textDecoration={"none"}>
          <Button
            width={{ base: "140px", sm: "170px", md: "144px", lg: "200px" }}
            fontSize={{ base: "18px", sm: "20px", md: "18px", lg: "24px" }}
            bg="rgba(196, 196, 196, 0.22)"
            height={{ base: "40px", sm: "50px", md: "45px", lg: "50px" }}
            pointerEvents="none"
          >
            Learn More
          </Button>
        </Link>
      </HStack>
    </Stack>
  );
};

export default HeaderIntro;
