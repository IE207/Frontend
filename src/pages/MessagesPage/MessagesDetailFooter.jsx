import {
  Flex,
  InputGroup,
  InputRightElement,
  Input,
  Box,
} from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";

const MessagesDetailFooter = () => {
  return (
    <Flex fontSize={12} p={5} w="full">
      <InputGroup>
        <Input
          borderRadius={40}
          bg={"gray.100"}
          placeholder="Write a message..."
        />
        <InputRightElement>
          <Box color="gray.500" cursor={"pointer"}>
            <BsFillSendFill />
          </Box>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default MessagesDetailFooter;
