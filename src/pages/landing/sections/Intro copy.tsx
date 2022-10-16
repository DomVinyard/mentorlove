import { Heading, Stack, Box, Text, Button, Image, Flex, HStack, Avatar } from '@chakra-ui/react'
import BtnImg from '../../../assets/addtoslack.png'
import HomeImage from '../../../assets/imghome.png'
import M from '../../../assets/m.png'
import Classroom from '../../../assets/classroom.png'


function Intro() {
  return (
    <Box w="full" bg="#202020" px="100px" pt="80px" mb="120px"  height={'100vh'} >
     <Flex flexDirection={['column', 'row']} justifyContent='space-between' >
        <Stack spacing='24px' height={'390px'}  w='400px' pt='60px' color='white'>
          <Heading fontSize={['24px','34px','44px']}> Help your trainees stay on track</Heading>
          <Text fontSize={['18px','20px','28px']}>The automated mentorship platform for companies and schools.</Text>
          <HStack spacing='20px' direction='row' align='center'  >
              <Button w='170px'  size='md' bgImage={BtnImg} bgPosition='center'
                bgRepeat='no-repeat' bgSize='cover'>
              </Button>
              <Button w='170px' size='md' bgColor='gray.600'>
                Learn More
              </Button>
            </HStack>
        </Stack>
        <Stack height={'390px'}  w='400px'  position="relative">
        <Image src={HomeImage} boxSize='400px' width='300px' objectFit='cover' objectPosition={['80%', '68%']} />
            <Flex flexDirection='column' pos="absolute" top="100" right="15" width='210px' height='110px' bg='#FFFFFF' borderRadius='xl' >
             <HStack   >
                <Avatar src={M} p='2' />
                <Text fontWeight='bold'>To Coach Sadia
                </Text>
              </HStack>
              <Text pl='2' pb='2' fontSize='14px'>How is Trainee Maria doing?</Text>
              <HStack >
                <Button ml='2' width='90px' bg='gray.200' color='black' fontSize='12px' height='25px'>👍On Track</Button>
                <Button width='90px' bg='#CE365C' color='white' fontSize='12px' height='25px'>Needs Support</Button>
              </HStack>
            </Flex>
            <Flex flexDirection='column' pos="absolute" top="225" right="50" width='210px' height='110px' bg='#FFFFFF' borderRadius='xl'>
             <HStack   >
                <Avatar src={Classroom} p='1' />
                <Text fontWeight='bold'> Google Classroom
                </Text>

              </HStack>
              <Text pl='2' pb='2' fontSize='14px'>Trainee Jose is falling behind</Text>
              <Button ml='2' width='180px' bg='gray.200' color='black' fontSize='12px' height='25px'>Request catch-up</Button>
            </Flex>

        </Stack>


     </Flex> 

    </Box>
  )
}

export default Intro