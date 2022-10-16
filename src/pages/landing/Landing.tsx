import { Box } from "@chakra-ui/react";
import ProductTour from "./sections/ProductTour";
import Intro from "./sections/Intro";
import NeedSupport from "./sections/NeedSupport";
import TraineeData from "./sections/TraineeData";
import UpdateMentor from "./sections/UpdateMentor";

function Landing() {
  return (
    <Box>
       <Intro/>
       <UpdateMentor/>
       <NeedSupport/>
       <TraineeData/>
       <ProductTour/>
    </Box>
  )
}

export default Landing