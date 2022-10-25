import { Flex, Link, VStack, Image } from "@chakra-ui/react";

const LinkItem = ({
  text,
  href,
  hideOnMobile = false,
}: {
  text: string;
  href: string;
  hideOnMobile?: boolean;
}) => (
  <Link
    href={href}
    fontSize={{ base: 16, lg: 18 }}
    display={{ base: hideOnMobile ? "none" : "block", lg: "block" }}
    children={text}
  />
);

const Nav = () => (
  <VStack bg="#202020" color="#FFFFFF">
    <Flex
      mt={{ base: 8, lg: 12 }}
      width={"100%"}
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Link href="/">
        <Image src={"assets/logo.png"} w={{ base: 48, lg: 64 }} />
      </Link>
      <LinkItem text="Features" href="#features" hideOnMobile />
      <LinkItem text="Pricing" href="#pricing" hideOnMobile />
      <LinkItem text="Log In" href="/" />
    </Flex>
  </VStack>
);
export default Nav;
