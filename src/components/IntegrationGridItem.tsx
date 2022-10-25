import { GridItem, Image } from "@chakra-ui/react";

type IntegrationProps = {
  filename: string;
  label?: string;
};

const Integration = ({ filename, label }: IntegrationProps) => (
  <GridItem marginX={"auto"}>
    <Image
      src={`logos/${filename}.png`}
      alt={label || filename}
      objectFit="cover"
    />
  </GridItem>
);
export default Integration;
