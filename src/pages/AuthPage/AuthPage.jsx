import { Flex, Stack, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Stack
      maxH={"100vh"}
      direction={{ base: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        flex={1}
        display={{ base: "none", md: "block" }}
        marginRight={50}
        maxH={"100vh"}
      >
        <Image alt={"Login Image"} src="/auth.png" />
      </Flex>

      <VStack flex={1} spacing={4} align={"stretch"}>
        <AuthForm />
      </VStack>
    </Stack>
  );
};

export default AuthPage;
