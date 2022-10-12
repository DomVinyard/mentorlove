import { Box, Flex, Heading } from "@chakra-ui/react";
import Support from '../../../components/NeedSupport'


function NeedSupport() {
  return (
    <Flex alignItems={'center'}  direction={'column'} px='100px' py='60px'>
        <Box w='60%' >
       <Heading fontSize={34}  textAlign={'center'} pb="40px" color='#CB4D4D'>
       Get automatic trainee updates from mentors, coaches and teachers 
      </Heading>    
    </Box>
    <Box  w='70%' height={'135px'} bg='#FEF0EF' mb='60px'>
    <Support/>
    </Box>
    </Flex>
  )
}

export default NeedSupport