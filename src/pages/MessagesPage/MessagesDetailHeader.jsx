import { Avatar, Flex, VStack, Box, HStack } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { BsFillRecordFill } from "react-icons/bs";

const MessagesDetailHeader = ({ selectedMessage }) => {
  const { name, avatar, isOnline } = selectedMessage;

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      p={5}
      borderBottom={"1px solid"}
      borderColor={"gray.300"}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar name={name} src={avatar} size={"md"} alt={`${name}'s avatar`} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={20} fontWeight={"bold"}>
            {name}
          </Box>
          <HStack
            spacing={1}
            fontSize={14}
            color="gray.500"
            alignItems="center"
          >
            <Box color={isOnline ? "green.500" : "red.500"}>
              <BsFillRecordFill />
            </Box>
            <Box>{isOnline ? "Online" : "Offline"}</Box>
          </HStack>
        </VStack>
      </Flex>

      <Flex>
        <InfoOutlineIcon fontSize={20} color={"gray.500"} cursor={"pointer"} />
      </Flex>
    </Flex>
  );
};

export default MessagesDetailHeader;
