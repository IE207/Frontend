import {
  Flex,
  InputGroup,
  InputRightElement,
  Input,
  Box,
} from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";

const MessagesDetailFooter = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage(""); // clear input after sending message
    }
  };

  return (
    <Flex fontSize={12} p={5} w="full">
      <InputGroup>
        <Input
          borderRadius={40}
          bg={"gray.100"}
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <InputRightElement>
          <Box color="gray.500" cursor={"pointer"} onClick={handleSend}>
            <BsFillSendFill />
          </Box>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default MessagesDetailFooter;
