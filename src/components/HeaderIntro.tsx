import {
  Heading,
  Stack,
  Text,
  Button,
  HStack,
  Link,
  Image,
} from "@chakra-ui/react";
import { strings } from "../data";

const HeaderIntro = () => (
  <Stack
    mb={8}
    w={{ base: "full", md: "420px" }}
    color="white"
    spacing={8}
    maxW={{ base: "460px", md: "auto" }}
  >
    <Heading
      fontSize={{ base: "44px", md: "44px" }}
      fontWeight={700}
      fontStyle="bold"
      children={strings.header.title}
    />
    <Text
      fontSize={{ base: "24px", md: "26px" }}
      fontStyle={"regular"}
      fontWeight={400}
      children={strings.header.subtitle}
    />
    <HStack spacing="20px" direction="row" align="center">
      <Link href="#pricing">
        <Image
          height={{ base: "40px", md: "50px" }}
          width={{ base: "140px", md: "180px" }}
          src={"images/addtoslack.png"}
          alt="Add to Slack"
        />
      </Link>
      <Link href="#features" textDecoration={"none"}>
        <Button
          width={{ base: "140px", md: "200px" }}
          height={{ base: "40px", md: "50px" }}
          fontSize={{ base: "18px", md: "20px" }}
          bg="rgba(196, 196, 196, 0.22)"
          pointerEvents="none"
          children={strings.header.more}
          fontWeight="normal"
        />
      </Link>
    </HStack>
  </Stack>
);

export default HeaderIntro;
