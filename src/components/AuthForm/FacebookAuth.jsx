import { Button, Image, Text } from "@chakra-ui/react";

const FacebookAuth = () => {
  return (
    <>
      <Button
        alignItems={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
        border={"1px solid #d2d7de"}
        borderRadius={4}
        w={"full"}
        size={"sm"}
        fontSize={14}
        bg={"white"}
      >
        <Image src="/facebook.png" w={5} alt="Facebook logo" sizes="md" />
        <Text mx={2}>Log in with Facebook</Text>
      </Button>
    </>
  );
};

export default FacebookAuth;
