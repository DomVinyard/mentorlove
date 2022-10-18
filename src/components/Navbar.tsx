import { Flex,VStack,Image,Link } from '@chakra-ui/react';
import logo from '../assets/logo.png'
  
  function Navbar() {
    return (  
      <VStack  bg='#202020' color='#FFFFFF' >
        <Flex  h={'15vh'} maxW='940px'  bg='red' w='full' justifyContent={'space-between'} alignItems='center'>
          <Image src={logo} h={{base:'8',md:'10',lg: '12'}} w={{base:'7em',md:'auto',lg:'auto'}} bg='pink' />
          <Link href='/' fontSize={{ base: '1.2em', md: '1.4em', lg: '1.6em' }}>Home</Link>
          <Link href='#features'>Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href='/' fontSize={{ base: '1.2em', md: '1.4em', lg: '1.6em' }}>Log In</Link>
        </Flex>
      </VStack>  
    )
  }
  
  export default Navbar