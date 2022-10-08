import React from 'react'
import Slack from '../assets/img.png'
import { Flex, Heading,HStack,Link,Spacer,Text,Icon, Image  } from '@chakra-ui/react'
function Header() {
  return (
    <Flex px='60px' py='30px' width='full' bg='blue.700' alignItems='flex-end' justifyContent='space-between' >
  <Flex alignItems='center'   width='full'>
    <Heading display='flex'  alignItems='center'  letterSpacing='0.5px'><Text as="span" color='white'>MENTOR </Text> <Image src={Slack}  h={9} px='10px'/><Text as="span" color='whiteAlpha.700' fontSize={25}> FOR SLACK</Text></Heading>

    <Spacer/>
    <HStack color='whiteAlpha.700' spacing='50px' letterSpacing='0.5px' >
        <Link>Home</Link>
        <Link>Features</Link>
        <Link>Pricing</Link>
        <Link>Log in</Link>
               
    </HStack>
  </Flex>
    </Flex>
  )
}

export default Header