import {useState} from "react"
import { Flex, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";

function Footer() {
  const [email, setIEmail] = useState("")
  const handleSubmit = () => {
    axios({
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      url:"https://hooks.slack.com/workflows/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",
      data:{
        "email":email
      }
    }).then(data => console.log(data)).catch(err => console.log(err))
  }
  return (
    <Flex
      alignItems={"center"}
      id="pricing"
      direction={"column"}
      bg={"#4E5462"}
      color="#FFFFFF"
      h="100vh"
      justifyContent={"center"}
      mt="100px"
    >
      <FormControl
        w={{ base: "90%", md: "50%" }}            
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <FormLabel
          width={{ base: "350px", sm: "380px", md: "460px", lg: "480px" }}
          fontSize={{ base: "xl", sm: "3xl", md: "3xl", lg: "4xl" }}
        >
          Mentor is invite-only, sign up now for early access
        </FormLabel>
        <Input
        value={email}
        onChange={(e) => setIEmail(e.target.value)}
          type="email"
          variant="unstyled"
          borderRadius={"none"}
          placeholder="you@email.com"
          fontSize="xl"
          m="40px"
          p="15px"
          width={{ base: "350px", sm: "380px", md: "460px", lg: "480px" }}
          bg={"#000000"}
        />
        <Button
          type="submit"
          bg="#2D9CDB"
          borderRadius={"none"}
          fontSize="xl"
          p="25px"
          width={{ base: "350px", sm: "380px", md: "360px", lg: "380px" }}
          onClick={handleSubmit}
        >
          Request early access
        </Button>
      </FormControl>
    </Flex>
  );
}

export default Footer;
