import { Box, HStack, VStack, Avatar, Text, } from '@chakra-ui/react'


function NeedSupport() {
    return (
        <VStack spacing={4}>
            <HStack spacing={0} w='80%' h='80px' mt='-20px'  >
                <Box w='15%' h='80px' bg='#EFDCDB' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </Box>


                <Box w='70%' h='80px' bg='#F5F5F5' p='3'>
                    <Text fontWeight='bold'>Jose</Text>
                    <Text> Did not submit latest task on time</Text>
                </Box>
                <Box w='15%' h='80px' bg='#F5F5F5' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    <Text fontSize='10px'>2 hour ago</Text>
                </Box>
            </HStack>



            <HStack spacing={0} w='80%' h='80px'    >
                <Box w='15%' h='80px' bg='#EFDCDB' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                </Box>


                <Box w='70%' h='80px' bg='#F5F5F5' p='3'>
                    <Text fontWeight='bold'>Dom</Text>
                    <Text> Needs help with time management</Text>
                </Box>
                <Box w='15%' h='80px' bg='#F5F5F5' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    <Text fontSize='10px'>6 hour ago</Text>
                </Box>
            </HStack>
                  

        </VStack>
    )
}

export default NeedSupport