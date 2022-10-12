import { Box,Flex,Text,Image,Heading,HStack,Link, } from '@chakra-ui/react';
import logo from '../assets/img.png'
  
  
  function Navnew() {
    return (  
        <Box bg='#202020' px='100px' color='#FFFFFF'>
          <Flex h={16} justifyContent='space-between' alignItems={'center'} px='1'>
          <Heading display='flex'  alignItems='center'  letterSpacing='0.5px'><Text as="span" color='white'>MENTOR </Text> <Image src={logo}  h={9} px='10px'/><Text as="span" color='whiteAlpha.700' fontSize={25}> FOR SLACK</Text></Heading>

            <HStack
              as={'nav'}
              spacing={32}
              display={{ base: 'none', md: 'flex' }}>
              <Link>Home</Link>
              <Link>Features</Link>
              <Link>Pricing</Link>
            </HStack>
            <Link>Log in</Link>
          </Flex>
        </Box>
  
    )
  }
  
  export default Navnew