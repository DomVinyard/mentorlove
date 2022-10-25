import { Flex, Link, VStack, Image } from "@chakra-ui/react";

const NavLinkItem = ({
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
    fontSize={{ base: 16, md: 18 }}
    display={{ base: hideOnMobile ? "none" : "block", md: "block" }}
    children={text}
  />
);

const Nav = () => (
  <VStack bg="#202020" color="#FFFFFF">
    <Flex
      mt={{ base: 8, md: 12 }}
      width={"100%"}
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Link href="/">
        <Image src={"images/logo.png"} w={{ base: 48, md: 64 }} />
      </Link>
      <NavLinkItem text="Features" href="#features" hideOnMobile />
      <NavLinkItem text="Pricing" href="#pricing" hideOnMobile />
      <strong>
        <NavLinkItem text="Log In" href="/" />
      </strong>
    </Flex>
  </VStack>
);

export default Nav;
