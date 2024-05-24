import { Box, VStack } from "@chakra-ui/react";
import MessagesElement from "./MessagesElement";
import MessagesListHeader from "./MessagesListHeader";

const MessagesList = ({ messages, onItemClick, onSearch, onNewChat }) => {
  return (
    <Box height={"100vh"} top={0} position={"sticky"}>
      <MessagesListHeader onSearch={onSearch} onNewChat={onNewChat} />
      <VStack spacing={4} align="stretch">
        {messages.map((message, index) => (
          <MessagesElement
          key={message.name}
          name={message.name}
          messages={message.messages}
          avatar={message.avatar}
          time={message.messages.length > 0 ? message.messages[message.messages.length - 1].time : ""}
          onClick={() => onItemClick(message)}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default MessagesList;
