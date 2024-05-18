import { Avatar, Flex, VStack, Box, Button, Text } from "@chakra-ui/react";

const Notification = ({ name, avatar, action, time }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} py={2}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"sm"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Text fontSize={12}>
            <Text as="span" fontWeight={"bold"}>
              {name}
            </Text>{" "}
            {action}
          </Text>
        </VStack>
      </Flex>

      <Text fontSize={12} color={"gray.500"} justifyContent={"right"}>
        {time}
      </Text>
    </Flex>
  );
};

export default Notification;
