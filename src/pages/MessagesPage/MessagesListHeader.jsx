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

const MessagesListHeader = ({ onSearch, onNewChat }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === "") {
      onSearch("");
    }
  };

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Text fontSize={24} fontWeight={"bold"}>
          Messages
        </Text>
        <Box fontSize={32} cursor={"pointer"} onClick={onNewChat}>
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
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </InputGroup>
      </Flex>
    </>
  );
};

export default MessagesListHeader;
