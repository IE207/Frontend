import { Avatar, Flex, VStack, Box, HStack } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { BsFillRecordFill } from "react-icons/bs";

const MessagesDetailHeader = ({ isOnline }) => {
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
        <Avatar name="Louis Pat" src="/sguser-1.png" size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={20} fontWeight={"bold"}>
            Louis Pat
          </Box>
          <HStack spacing={1} fontSize={14} color="gray.500" alignItems="center"
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
