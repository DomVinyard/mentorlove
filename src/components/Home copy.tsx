import React from 'react'
import { Heading, Box, Text, Button,  Image, Flex, HStack,Link } from '@chakra-ui/react'
import BtnImg from '../assets/addtoslack.png'
import HomeImage from '../assets/imghome.png'
function Home() {
  return (
    <Box w='full' h='80vh' bg='rgba(32, 32, 32, 1)'>
      <Flex py='60px' px='60px' justifyContent='space-between' bg='yellow.500' alignItems='center'>
        <Box bg='blue' mr='60px' width='400px' >
          <Heading as='h3' color={'white'}>Help your trainees stay on track</Heading>
          <Text fontSize='xl' color={'white'} my='20px'>
            The automated mentorship platform for companies and schools.
          </Text>
          {/* <Button backgroundImage={BtnImg}
            backgroundPosition="center"
            backgroundRepeat="no-repeat" w='25vh' >
          </Button>
          <Button w='25vh'>Learn More</Button> */}
          <HStack spacing='50px' direction='row' align='center' >
            <Button colorScheme='teal' size='lg'>
              Button
            </Button>
            <Button colorScheme='teal' size='lg'>
              Button
            </Button>

          </HStack>


        </Box>

        <Box >
          <Image src={HomeImage} boxSize='400px' />
        </Box>

      </Flex>
    </Box>
  )
}

export default Home