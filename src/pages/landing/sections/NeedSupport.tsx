import { Box, Flex, Heading } from "@chakra-ui/react";
import Support from '../../../components/NeedSupport'


function NeedSupport() {
  return (
    <Flex alignItems={'center'}  direction={'column'} w='100vw'  pt={{base:'30px',md:'70px'}} >
        <Box maxW='940px'   w='full' px={{base:'20px',md:'100px'}}  >
       <Heading fontSize={{base:'28px',md:'40px'}}  textAlign={'center'} pb="30px" color='#CB4D4D' >
       Automatically flag when trainees are falling behind or need support
      </Heading>    
    </Box>
    <Box   maxW='940px'   w='full' height={{base:'80px',md:'170px'}} bg='#FEF0EF' >
    <Support/>
    </Box>
    </Flex>
  )
}

export default NeedSupport