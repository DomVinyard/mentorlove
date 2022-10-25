import { Center, VStack, Image, Text } from "@chakra-ui/react";
import { Inner, Title, strings } from "../App";

const ProductTour = () => (
  <VStack w="full" display="flex" justifyContent="center" alignItems="center">
    <Inner>
      <Title color="grey.200" text={strings.video.title} />
    </Inner>
    <Inner fullOnMobile>
      <Center bg={"grey.300"} py="50px">
        <Image
          cursor="pointer"
          onClick={() => alert("Product tour cominng soon")}
          src={"images/video_thumb.png"}
          w={{ base: "80%", md: "40%" }}
        />
      </Center>
    </Inner>
    <Text>{strings.video.caption}</Text>
  </VStack>
);

export default ProductTour;
