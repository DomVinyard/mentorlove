import React from 'react'

import {useMediaQuery, Heading, Stack ,ButtonGroup, Box, Text, Button,  Image, Flex, HStack,Link  } from '@chakra-ui/react'
import BtnImg from '../assets/addtoslack.png'
import HomeImage from '../assets/imghome.png'
import M from '../assets/m.png'





function Home() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  return (
    <Box width='100%' height='590px' bg='#202020' justifyContent='center' display='flex' alignItems='center' >
<Stack width='90%' bg='red.100'>
   <Flex direction={isNotSmallerScreen ? 'row' : 'column'} justifyContent='space-between'  alignItems='center'> 
   <Box width='30%' bg='red.300' color='white'>
     <Heading as='h3' color={'white'}>Help your trainees stay on track</Heading>
     <Text fontSize='xl' color={'white'} my='20px'>
      The automated mentorship platform for companies and schools.
     </Text>
     <HStack spacing='20px' direction='row' align='center'  >
      <Button w='160px' colorScheme='slack' size='md' bgImage={BtnImg} bgPosition='center'
    bgRepeat='no-repeat' bgSize='cover'> 
        
      </Button>
      <Button  w='160px' size='md' bgColor='blackAlpha.500'>
        Learn More
      </Button>

    </HStack>
   </Box>
   <Box width='30%' bg='red.400' position="relative" >
   <Image src={HomeImage}  boxSize='350px'  width='300px' objectFit='cover'  objectPosition={['80%', '75%']}  />
    <Box flexDirection='column' display='flex' pos="absolute" top="100" right="15" width='200px' height='100px' bg='red' borderRadius='xl'>
   
  <Box p='2' >
    <Heading  size=''><Image src={M} boxSize='20px' bg='blue'/> To Coach Sadia </Heading>
  </Box>
  
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>👍On Track</Button>
    <Button bg='#CE365C' color='white'>Needs Support</Button>
  </ButtonGroup>

    </Box> 
    <Box pos="absolute" top="210" right="50" width='200px' height='100px' bg='red' borderRadius='xl'>Hrllo</Box> 
  

   </Box>
   </Flex>
</Stack>

</Box>

    // <Box w='full' h='80vh' bg='rgba(32, 32, 32, 1)'>
    //   <Flex py='60px' px='60px' justifyContent='space-between' bg='yellow.500' alignItems='center'>
    //     <Box bg='blue' mr='60px' width='400px' >
    //       <Heading as='h3' color={'white'}>Help your trainees stay on track</Heading>
    //       <Text fontSize='xl' color={'white'} my='20px'>
    //         The automated mentorship platform for companies and schools.
    //       </Text>
    //       {/* <Button backgroundImage={BtnImg}
    //         backgroundPosition="center"
    //         backgroundRepeat="no-repeat" w='25vh' >
    //       </Button>
    //       <Button w='25vh'>Learn More</Button> */}
    //       <HStack spacing='50px' direction='row' align='center' >
    //         <Button colorScheme='teal' size='lg'>
    //           Button
    //         </Button>
    //         <Button colorScheme='teal' size='lg'>
    //           Button
    //         </Button>

    //       </HStack>


    //     </Box>

    //     <Box >
    //       <Image src={HomeImage} boxSize='400px' />
    //     </Box>

    //   </Flex>
    // </Box>
  )
}

export default Home