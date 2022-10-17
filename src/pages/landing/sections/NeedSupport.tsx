import { Box, Flex, Heading } from "@chakra-ui/react";
import Support from '../../../components/NeedSupport'


function NeedSupport() {
  return (
    <Flex alignItems={'center'}  direction={'column'} w='100vw'  pt='100px'>
        <Box w='60vw' >
       <Heading fontSize={'40px'}  textAlign={'center'} pb="40px" color='#CB4D4D'>
       Automatically flag when trainees are falling behind or need support
      </Heading>    
    </Box>
    <Box  w='80vw' height={'165px'} bg='#FEF0EF' mb='60px'>
    <Support/>
    </Box>
    </Flex>
  )
}

export default NeedSupport