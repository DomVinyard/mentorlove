import {Heading, Flex,Input,Button,Stack } from "@chakra-ui/react";


function Footer() {
  return (
    <Flex alignItems={'center'}  direction={'column'} px='100px'  bg={'#4E5462'} color='#FFFFFF' h='600px' justifyContent={'center'}>
    <Stack w='50%' textAlign={'center'} spacing={'6'} display='flex' justifyContent={'center'} alignItems={'center'}  direction={'column'}>
     <Heading
        color="white"
        fontSize={36}
      >
       Mentor is invite-only, sign up now for early access
      </Heading>
      <Input variant='unstyled' borderRadius={'none'} placeholder='you@email.com' size='md' p='10px' width={'400px'} bg={'#000000'}/>

      <Button bg='#2D9CDB' borderRadius={'none'} width={'300px'}>Request early access</Button>
     </Stack>
    </Flex>
  );
};


export default Footer