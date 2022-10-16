import { Box, HStack, VStack, Avatar, Text, Image} from '@chakra-ui/react'
import Arrow from '../assets/arrow.png'


function UpdateCart() {
    return (
        <VStack spacing={4}>
            <HStack spacing={0} w='80%' h='80px' mt='-20px'  >
                <Box w='15%' h='80px' bg='#A7CCB7' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </Box>


                <Box w='70%' h='80px' bg='#F5F5F5' p='3'>
                    <Text fontWeight='bold'>Maria</Text>
                    <Text display='flex' flexDirection='row'><Image src={Arrow} boxSize='1em' mr='0.5em'/> Helping other trainees with their coursework</Text>
                </Box>
                <Box w='15%' h='80px' bg='#F5F5F5' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds'  boxSize={'2em'}/>
                    <Text fontSize='10px'>2 hour ago</Text>
                </Box>
            </HStack>



            <HStack spacing={0} w='80%' h='80px'    >
                <Box w='15%' h='80px' bg='#A7CCB7' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                </Box>


                <Box w='70%' h='80px' bg='#F5F5F5' p='3'>
                    <Text fontWeight='bold'>Luca</Text>
                    <Text display='flex' flexDirection='row'><Image src={Arrow} boxSize='1em' mr='0.5em'/> Showing excellent leadership skills</Text>
                </Box>
                <Box w='15%' h='80px' bg='#F5F5F5' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds'  boxSize={'2em'}/>
                    <Text fontSize='10px'>6 hour ago</Text>
                </Box>
            </HStack>



            <HStack spacing={0} w='80%' h='80px' mt='-20px'  >
                <Box w='15%' h='80px' bg='#A7CCB7' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </Box>


                <Box w='70%' h='80px' bg='#F5F5F5' p='3'>
                    <Text fontWeight='bold'>Dawn</Text>
                    <Text display='flex' flexDirection='row'><Image src={Arrow} boxSize='1em' mr='0.5em'/> Completed professional development workshop</Text>
                </Box>
                <Box w='15%' h='80px' bg='#F5F5F5' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' boxSize={'2em'}/>
                    <Text fontSize='10px'>2 hour ago</Text>
                </Box>
            </HStack>



            <HStack spacing={0} w='80%' h='80px' mt='-20px'  >
                <Box w='15%' h='80px' bg='#A7CCB7' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                </Box>


                <Box w='70%' h='80px' bg='#F5F5F5' p='3'>
                    <Text fontWeight='bold'>Mylo</Text>
                    <Text display='flex' flexDirection='row'><Image src={Arrow} boxSize='1em' mr='0.5em'/> Personal study work is up to date</Text>
                </Box>
                <Box w='15%' h='80px' bg='#F5F5F5' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' boxSize={'2em'} />
                    <Text fontSize='10px'>14 hour ago</Text>
                </Box>
            </HStack>

        </VStack>
    )
}

export default UpdateCart