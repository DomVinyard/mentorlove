import { Box, HStack, VStack, Avatar, Text,Image } from '@chakra-ui/react'
import Arrow from '../assets/redarrow.png'

function NeedSupport() {
    return (
        <VStack spacing={4} >
            <HStack spacing={0} w={{base:'350px', md:'750px'}}  mt='-25px'  >
                <Box w={{base:'60px',md:'115px'}} h={{base:'60px',md:'100px'}}  bg='#EFDCDB' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' p={{base:'0',md:'2'}}  boxSize={{base:'2.5em',md:'5em'}} />
                </Box>
                <Box pl={{base:'4px',md:'8px'}} w={{base:'240px',md:'520px'}} h={{base:'60px',md:'100px'}} bg='#F5F5F5' display='flex' flexDirection='column' alignItems='start' justifyContent='center' fontSize={{base:'10px',md:'20px'}}>
                    <Text fontWeight='bold'>Jose</Text>
                    <Text display='flex' flexDirection='row'  alignItems='center'><Image src={Arrow} boxSize={{base:'10px',md:'18px'}} mr={{base:'4px',md:'8px'}} /> Did not submit latest task on time</Text>
                </Box>
                <Box  bg='#F5F5F5' w={{base:'50px',md:'115px'}} h={{base:'60px',md:'100px'}}  display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds'  boxSize={{base:'1.5em',md:'2em'}}/>
                    <Text fontSize={{base:'7px',md:'12px'}}>4 days ago</Text>
                </Box>
            </HStack>

            <HStack spacing={0} w={{base:'350px', md:'750px'}}  mt='-25px'  >
                <Box w={{base:'60px',md:'115px'}} h={{base:'60px',md:'100px'}}    bg='#EFDCDB' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/code-beast' p={{base:'0',md:'2'}} boxSize={{base:'2.5em',md:'5em'}} />
                </Box>
                <Box pl={{base:'4px',md:'8px'}} w={{base:'240px',md:'520px'}} h={{base:'60px',md:'100px'}} bg='#F5F5F5' display='flex' flexDirection='column' alignItems='start' justifyContent='center' fontSize={{base:'10px',md:'20px'}}>
                    <Text fontWeight='bold'>Dom</Text>
                    <Text display='flex' flexDirection='row'   alignItems='center'><Image src={Arrow} boxSize={{base:'10px',md:'18px'}} mr={{base:'4px',md:'8px'}} />Needs help with time management</Text>
                </Box>
                <Box position='relative'  bg='#F5F5F5' w={{base:'50px',md:'115px'}} h={{base:'60px',md:'100px'}}  >
                    <Avatar name='Kent Dodds' src='https://bit.ly/ryan-florence'  boxSize={{base:'1.5em',md:'2em'}} right={{base:'20px',md:'50px'}} top={{base:'15px',md:'25px'}} position={'absolute'}/>
                    <Avatar name='Kent Dodds' src='https://bit.ly/prosper-baba'  boxSize={{base:'1.5em',md:'2em'}} right={{base:'5px',md:'25px'}}  top={{base:'15px',md:'25px'}} position={'absolute'}/>
                    <Text fontSize={{base:'7px',md:'12px'}} position={'absolute'} right={{base:'10px',md:'30px'}} top={{base:'45px',md:'70px'}}>20 mins ago</Text>
                </Box>
            </HStack>       
        </VStack>
    )
}

export default NeedSupport;