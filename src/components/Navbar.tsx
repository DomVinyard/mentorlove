import { Flex, VStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <VStack bg="#202020" color="#FFFFFF">
      <Flex
        h={"15vh"}
        maxW="940px"
        width={{ base: "90%", sm: "90%", md: "90%", lg: "100%" }}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Link href="/">
          {" "}
          <Image
            src={logo}
            h={{ base: "8", sm: "10", md: "12", lg: "14" }}
            pb={{ base: "1", sm: "2", md: "3" }}
          />
        </Link>

        <Link
          href="/"
          fontSize={{ md: "22px", lg: "24px" }}
          display={{ base: "none", md: "inline" }}
        >
          Home
        </Link>
        <Link
          fontSize={{ md: "22px", lg: "24px" }}
          display={{ base: "none", md: "inline" }}
          href="#features"
        >
          Features
        </Link>
        <Link
          fontSize={{ md: "22px", lg: "24px" }}
          display={{ base: "none", md: "inline" }}
          href="#pricing"
        >
          Pricing
        </Link>
        <Link
          href="/"
          fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px" }}
        >
          Log In
        </Link>
      </Flex>
    </VStack>
  );
}

export default Navbar;
