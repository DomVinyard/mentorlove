import { Stack, Text, Button, Flex, HStack, Avatar } from "@chakra-ui/react";
import { breakpointPx } from "./Inner";
import { useWindowWidth } from "@react-hook/window-size/throttled";

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

export default HeaderImage;
