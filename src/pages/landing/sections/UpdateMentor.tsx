import { Box, Flex, Heading} from "@chakra-ui/react";
import UpdateCart from '../../../components/UpdateCart'


function UpdateMentor() {
  return (
    <Flex alignItems={'center'}  direction={'column'} px='100px'>
        <Box w='60%' >
       <Heading fontSize={34} textAlign={'center'} pb="40px" color='#1B7B45'>
       Get automatic trainee updates from mentors, coaches and teachers 
      </Heading>    
    </Box>
    <Box  w='70%' height={'320px'} bg='#B9DECC' mb='60px'>
    <UpdateCart/>
    </Box>
    </Flex>
  )
}

export default UpdateMentor