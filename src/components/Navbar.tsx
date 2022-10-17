import { Box,Flex,Text,Image,Heading,HStack,Link, } from '@chakra-ui/react';
import logo from '../assets/logo.png'

  
  
  function Navnew() {
    return (  
        <Box bg='#202020' px='100px' color='#FFFFFF' >
          <Flex h={'15vh'} w='80vw' justifyContent='space-between'  alignItems={'center'}  fontSize={'1.3em'}>
           <Image src={logo}  h={10} />

            <HStack 
              as={'nav'}
              spacing={32}
              display={{ base: 'none', md: 'flex' }}>
              <Link >Home</Link>
              <Link>Features</Link>
              <Link>Pricing</Link>
            </HStack>
            <Link >Log in</Link>
          </Flex>
        </Box>
  
    )
  }
  
  export default Navnew