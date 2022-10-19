import {Heading, Flex,Input,Button,Stack } from "@chakra-ui/react";


function Footer() {
  return (
    <Flex alignItems={'center'} id='pricing' direction={'column'} bg={'#4E5462'} color='#FFFFFF' h='100vh' justifyContent={'center'}>
    <Stack w='50%' textAlign={'center'} spacing={'6'} display='flex' justifyContent={'center'} alignItems={'center'}  direction={'column'}>
     <Heading
        color="white"
        fontSize={40}
      >
       Mentor is invite-only, sign up now for early access
      </Heading>
      <Input variant='unstyled' borderRadius={'none'} placeholder='you@email.com' fontSize='xl' p='15px' width={{base:'17em', md:'25em'}} bg={'#000000'}/>

      <Button bg='#2D9CDB' borderRadius={'none'}  fontSize='xl' p='25px'width={{base:'12em', md:'20em'}}>Request early access</Button>
     </Stack>
    </Flex>
  );
};


export default Footer