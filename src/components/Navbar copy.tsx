import React, { Component } from 'react'
import { Box,Flex,Text,Image,Heading,HStack,Link,Stack } from '@chakra-ui/react';
import logo from '../assets/logo.png'

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Features", link: "#features" },
  { name: "Pricing", link: "#pricing" },
  { name: "Log In", link: "/" },

];

  
  function Navbar() {
    return (  
        <Box bg='#202020' px='100px' color='#FFFFFF' >
          {/* <Flex h={'15vh'} w='80vw' justifyContent='space-between'  alignItems={'center'}  fontSize={'1.3em'}>
           <Image src={logo}  h={10} />

            <HStack 
              as={'nav'}
              spacing={32}
              display={{ base: 'none', md: 'flex' }}>
              <Link >Home</Link>
              <Link to='#features'  spy={true} smooth={true}>Features</Link>
              <Link>Pricing</Link>
            </HStack>
            <Link >Log in</Link>
          </Flex> */}
          <Stack
          align="flex-start"
          spacing={[4, 10]}
          direction={["column", "row"]}
        >
          {navLinks.map((navLink: any, i: number) => {
            return (
              <Link
                href={navLink.link}
                key={`navlink_${i}`}
                fontWeight={500}
                variant="ghost"
              >
                {navLink.name}
              </Link>
            );
          })}
        </Stack>
        </Box>
  
    )
  }
  
  export default Navbar