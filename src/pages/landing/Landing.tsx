import { Box } from "@chakra-ui/react";
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
    </Box>
  )
}

export default Landing