import React from 'react'
import { Heading, Box, Text,Button, Image, Flex, Spacer } from '@chakra-ui/react'
import BtnImg from '../assent/addtoslack.png'
import HomeImage from '../assent/imghome.png'
function Home() {
  return (
    <Flex  w='100%' h='100vh' bg='rgba(32, 32, 32, 1)'>
    <Box >
      <Heading as='h3' color={'white'}>Help your trainees stay on track</Heading>
      <Text fontSize='xl' color={'white'}>
       
      
      The automated mentorship platform for companies and schools.
      </Text>
      <Button backgroundImage={BtnImg}
  backgroundPosition="center"
  backgroundRepeat="no-repeat"  w='37vh'>
 
  </Button>
  <Button  w='37vh'>Learn More</Button>
 
    </Box>
    <Box>
      <Image  src={HomeImage } w='65vh' h='70vh'/>
    </Box>
 
  </Flex>
  )
}

export default Home