import { Box, Flex, Heading} from "@chakra-ui/react";
import SuccessCart from '../../../components/SuccessCart'



function Success() {
  return (
    <Box  id='features'  w='100vw'  bg='pink.800' pt={{base:'150px',md:''}}>
      <Flex alignItems={'center'}  direction={'column'} >
        <Box  maxW='940px'   w='full'  >
       <Heading fontSize={{base:'28px',md:'40px'}} textAlign={'center'} pb="1.5em" color='green'>
       Get automatic trainee updates from mentors, coaches and teachers 
      </Heading>    
    </Box>
    <Box   maxW='940px'   w='full' height={{base:'240px',md:'395px'}} bg='lighterGreen' mb='60px'>
    <SuccessCart/>
    </Box>
    </Flex>
    </Box>
  )
}

export default Success