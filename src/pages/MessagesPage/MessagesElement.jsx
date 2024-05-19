import { Avatar, Flex, VStack, Box, Text } from "@chakra-ui/react";

const MessagesElement = ({ name, messages, avatar, time }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      p={3}
      cursor={"pointer"}
      _hover={{ bg: "gray.200" }}
      borderRadius={10}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={14} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={14} color={"gray.500"}>
            {messages}
          </Box>
        </VStack>
      </Flex>

      <Text fontSize={13} color={"gray.500"} p={0} mt={"auto"}>
        {time}
      </Text>
    </Flex>
  );
};

export default MessagesElement;
