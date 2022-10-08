import React from 'react'
import { Heading, Box, Text, Button, Image, Flex, Spacer } from '@chakra-ui/react'
import BtnImg from '../assets/addtoslack.png'
import HomeImage from '../assets/imghome.png'
function Home() {
  return (
    <Box w='100%' h='100vh' bg='rgba(32, 32, 32, 1)'>
      <Flex w='80%' h='80vh' pt='10vh' justifyContent='space-between'>
        <Box >
          <Heading as='h3' color={'white'}>Help your trainees stay on track</Heading>
          <Text fontSize='xl' color={'white'}>
            The automated mentorship platform for companies and schools.
          </Text>
          <Button backgroundImage={BtnImg}
            backgroundPosition="center"
            backgroundRepeat="no-repeat" w='37vh' >
          </Button>
          <Button w='37vh'>Learn More</Button>
        </Box>
       
        <Box>
          <Image src={HomeImage} boxSize='70vh' />
        </Box>

      </Flex>
    </Box>
  )
}

export default Home