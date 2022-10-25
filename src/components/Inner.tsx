import { Box } from "@chakra-ui/react";

type InnerProps = {
  children: React.ReactNode;
  fullOnMobile?: boolean;
};

export const breakpointPx = 900;

const Inner = ({ children, fullOnMobile }: InnerProps) => (
  <Box
    maxW={{ base: fullOnMobile ? "100%" : "90%", md: `${breakpointPx}px` }}
    w={fullOnMobile ? "100%" : "90%"}
    marginX="auto"
    children={children}
  />
);

export default Inner;
