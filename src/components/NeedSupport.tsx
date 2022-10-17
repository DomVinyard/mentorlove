import { Box, HStack, VStack, Avatar, Text,Image } from '@chakra-ui/react'
import Arrow from '../assets/redarrow.png'

function NeedSupport() {
    return (
        <VStack spacing={4}>
            <HStack spacing={0} w='80%'  mt='-25px'  >
                <Box w='15%' h='100px' bg='#EFDCDB' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' p={'2'}  boxSize={'5em'}  />
                </Box>


                <Box w='70%' h='100px' bg='#F5F5F5' p='3'>
                    <Text fontWeight='bold'>Jose</Text>
                    <Text display='flex' flexDirection='row'  alignItems='center'><Image src={Arrow} boxSize='1em' mr='0.5em'/>  Did not submit latest task on time</Text>
                </Box>
                <Box w='15%' h='100px' bg='#F5F5F5' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds'  boxSize={'2em'} />
                    <Text fontSize='10px'>2 hour ago</Text>
                </Box>
            </HStack>



            <HStack spacing={0} w='80%'   >
                <Box w='15%' h='100px' bg='#EFDCDB' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' p={'2'}  boxSize={'5em'}  />
                </Box>


                <Box w='70%' h='100px' bg='#F5F5F5' p='3'>
                    <Text fontWeight='bold'>Dom</Text>
                    <Text display='flex' flexDirection='row'  alignItems='center'><Image src={Arrow} boxSize='1em' mr='0.5em'/> Needs help with time management</Text>
                </Box>
                <Box w='15%' h='100px' bg='#F5F5F5' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds'  boxSize={'2em'} />
                    <Text fontSize='10px'>6 hour ago</Text>
                </Box>
            </HStack>
                  

        </VStack>
    )
}

export default NeedSupport