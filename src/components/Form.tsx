import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { strings } from "../data";
import { Title } from "./Title";
const endpoint =
  "https://hooks.slack.com/workflows/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";

const Form = () => {
  const [email, setIEmail] = useState("");
  const handleSubmit = async () => {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await response.json();
      console.log("posted", json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl display="flex" alignItems={"center"} flexDirection={"column"}>
      <Title color="white" text={strings.form.title} />
      <Input
        value={email}
        onChange={(e) => setIEmail(e.target.value)}
        type="email"
        variant="unstyled"
        borderRadius={"none"}
        placeholder={strings.form.placeholder}
        fontSize="xl"
        mt="28px"
        mb="40px"
        p="15px"
        width={{ base: "350px", sm: "380px", md: "460px", lg: "480px" }}
        bg={"#000000"}
        color="white"
      />
      <Button
        type="submit"
        bg="#2D9CDB"
        borderRadius={"none"}
        fontSize="xl"
        p="25px"
        width={{ base: "350px", sm: "380px", md: "360px", lg: "380px" }}
        onClick={handleSubmit}
        children={strings.form.button}
      />
    </FormControl>
  );
};
export default Form;
