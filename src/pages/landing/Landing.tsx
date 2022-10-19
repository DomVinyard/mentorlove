import { Box } from "@chakra-ui/react";
import ProductTour from "./sections/ProductTour";
import Intro from "./sections/Intro";
import NeedSupport from "./sections/NeedSupport";
import TraineeData from "./sections/TraineeData";
import Success from "./sections/Success";

function Landing() {
  return (
    <Box>
       <Intro/>
       <Success/>
       <NeedSupport/>
       <TraineeData/>
       <ProductTour/>
    </Box>
  )
}

export default Landing