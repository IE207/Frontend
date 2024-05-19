import { Box, Button, Container, Flex, VStack } from "@chakra-ui/react";
import MessagesListHeader from "./MessagesListHeader";
import MessagesElement from "./MessagesElement";

const MessagesList = ({ messages, onItemClick }) => {
  return (
    <Box height={"100vh"} top={0} position={"sticky"}>
      <MessagesListHeader />

      {messages.map((message, index) => (
        <MessagesElement
          key={index}
          name={message.name}
          messages={message.messages}
          avatar={message.avatar}
          time={message.time}
          onClick={() => onItemClick(message)}
        />
      ))}
    </Box>
  );
};

export default MessagesList;
