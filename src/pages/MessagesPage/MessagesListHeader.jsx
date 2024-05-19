import {
  Flex,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { BsPlusCircleFill } from "react-icons/bs";

const MessagesListHeader = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Text fontSize={24} fontWeight={"bold"}>
          Messages
        </Text>
        <Box fontSize={32} cursor={"pointer"}>
          <BsPlusCircleFill />
        </Box>
      </Flex>

      <Flex fontSize={12} pt={5} pb={7}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input placeholder="Search" />
        </InputGroup>
      </Flex>
    </>
  );
};

export default MessagesListHeader;
