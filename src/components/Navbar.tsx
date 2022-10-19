import { Flex,VStack,Image,Link } from '@chakra-ui/react';
import logo from '../assets/logo.png'
  
  function Navbar() {
    return (  
      <VStack  bg='#202020' color='#FFFFFF' >
        <Flex  h={'15vh'} maxW='940px'   w='full' justifyContent={'space-between'} alignItems='center' px={{base:'4',md:'0'}}>
          <Image src={logo} h={{base:'8',md:'12'}}  pb={{base:'1',md:'3'}}/>
     
          <Link href='/' fontSize={{  md: '20px' }} display={{base:'none',md:'inline'}}>Home</Link>
          <Link fontSize={{ md: '20px' }} display={{base:'none',md:'inline'}} href='#features'>Features</Link>
          <Link  fontSize={{ md: '20px' }} display={{base:'none',md:'inline'}} href="#pricing">Pricing</Link>
        
          <Link href='/' fontSize={{ base: '18px', md: '20px' }}>Log In</Link>
        </Flex>
      </VStack>  
    )
  }
  
  export default Navbar