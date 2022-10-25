import { VStack, Grid } from "@chakra-ui/react";
import { strings } from "../data";
import { Inner, Title } from "../App";
import { GridItem, Image } from "@chakra-ui/react";

type IntegrationProps = {
  filename: string;
  label?: string;
};

const IntegrationGridItem = ({ filename, label }: IntegrationProps) => (
  <GridItem marginX={"auto"}>
    <Image
      src={`logos/${filename}.png`}
      alt={label || filename}
      objectFit="cover"
    />
  </GridItem>
);

const Integrations = () => (
  <>
    <Inner>
      <Title text={strings.integrations.title} color="#2A87A9" />
    </Inner>
    <Inner fullOnMobile>
      <VStack
        w="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          bg="#EFFAFE"
          width={"full"}
          gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gridGap={{ base: 8, md: 8 }}
          p={8}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <IntegrationGridItem filename="classroom" label="Google Classroom" />
          <IntegrationGridItem filename="github" label="Github" />
          <IntegrationGridItem filename="codewars" label="CodeWars" />
          <IntegrationGridItem filename="schoology" label="Schoology" />
        </Grid>
      </VStack>
    </Inner>
  </>
);

export default Integrations;
