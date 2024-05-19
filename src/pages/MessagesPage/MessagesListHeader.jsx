import {
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from "react";


const MessagesListHeader = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

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
          <Input
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </InputGroup>
      </Flex>
    </>
  );
};

export default MessagesListHeader;
