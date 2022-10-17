import { Box, Flex, Heading} from "@chakra-ui/react";
import UpdateCart from '../../../components/UpdateCart'


function UpdateMentor() {
  return (
    <Flex alignItems={'center'}  direction={'column'} w='100vw' pt='100px'>
        <Box  w='60vw' >
       <Heading fontSize={'40px'} textAlign={'center'} pb="1.5em" color='green'>
       Get automatic trainee updates from mentors, coaches and teachers 
      </Heading>    
    </Box>
    <Box  w='80vw' height={'395px'} bg='lighterGreen' mb='60px'>
    <UpdateCart/>
    </Box>
    </Flex>
  )
}

export default UpdateMentor