import { Button, Image, Text } from "@chakra-ui/react";

const GoogleAuth = () => {
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
        <Image src="/google.png" w={5} alt="Google logo" sizes="md" />
        <Text mx={2}>Log in with Google</Text>
      </Button>
    </>
  );
};

export default GoogleAuth;
