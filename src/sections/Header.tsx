import {
  Flex,
  Image,
  Text,
  Stack,
  Heading,
  Link,
  HStack,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Inner from "../components/Inner";
import { breakpointPx } from "../components/Inner";
import { useWindowWidth } from "@react-hook/window-size/throttled";
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

type InfoBubbleProps = {
  avatar: string;
  heading: string;
  text: string;
  offsetPx: number;
  buttons: any;
};

const InfoButton = ({ text, background, color }: any) => (
  <Button
    width={"100%"}
    bg={background}
    color={color}
    fontSize={"12px"}
    height="32px"
    pointerEvents="none"
    children={text}
  />
);

const InfoBubble = ({
  heading,
  avatar,
  text,
  offsetPx,
  buttons,
}: InfoBubbleProps) => {
  const windowWidth = useWindowWidth();
  const maxOffset = Math.max(windowWidth - (breakpointPx + offsetPx), 10);
  return (
    <Flex
      flexDirection="column"
      p={4}
      bg="#FFFFFF"
      borderRadius="xl"
      transform={{
        base: `translateX(${offsetPx}px)`,
        md: `translateX(${Math.min(offsetPx, maxOffset)}px)`,
      }}
      alignItems={"flex-start"}
      boxShadow={"0px 3px 3px rgba(0, 0, 0, 0.3)"}
    >
      <HStack spacing={0}>
        <Avatar src={avatar} h={6} w={6} mr={1.5} />
        <Text fontWeight="bold">{heading}</Text>
      </HStack>
      <Text py={1} children={text} />
      {buttons.length && (
        <HStack mt={1} justifyContent={"space-around"} width={"100%"}>
          {buttons.map((button: any) => (
            <InfoButton {...button} />
          ))}
        </HStack>
      )}
    </Flex>
  );
};

const HeaderImage = () => (
  <Stack
    backgroundImage={"url(images/splash.png)"}
    backgroundSize="cover"
    boxSize={{ base: "400px", md: "400px" }}
    width={{ base: "70%", md: "300px" }}
    mb={{ base: 12, md: 0 }}
    ml={{ base: 0, md: 3 }}
    objectFit="cover"
    alignItems={"flex-end"}
    justifyContent={"flex-end"}
    pb={6}
    transform={{ base: "translateY(90px)", md: "translateY(0px)" }}
  >
    <InfoBubble
      avatar="avatars/mentor.png"
      heading="To Coach Sadia"
      text="How is Trainee Maria doing?"
      offsetPx={92}
      buttons={[
        { text: "👍 On Track", background: "gray.200", color: "black" },
        { text: "Needs Support", background: "#CE365C", color: "white" },
      ]}
    />
    <InfoBubble
      avatar="logos/classroom_2.png"
      heading="Google Classroom"
      text="Trainee Jose is falling behind"
      offsetPx={24}
      buttons={[
        { text: "Request catch-up", background: "gray.200", color: "black" },
      ]}
    />
  </Stack>
);

const SectionHeader = () => (
  <Box minH={"100vh"} background="grey.900" mb={{ base: 40, md: 0 }}>
    <Inner>
      <Stack minH={"100vh"}>
        <Box height="150px">
          <Nav />
        </Box>
        <Flex
          flexGrow={1}
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "flex-start", md: "center" }}
          justifyContent="space-between"
          transform={{ base: "none", md: "translateY(-5vh)" }}
        >
          <HeaderIntro />
          <HeaderImage />
        </Flex>
      </Stack>
    </Inner>
  </Box>
);

export default SectionHeader;