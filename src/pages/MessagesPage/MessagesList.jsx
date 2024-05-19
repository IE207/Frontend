import { Box } from "@chakra-ui/react";
import MessagesListHeader from "./MessagesListHeader";
import MessagesElement from "./MessagesElement";
import { useState } from "react";


const MessagesList = ({ messages, onItemClick, onSearch }) => {
  

  return (
    <Box height={"100vh"} top={0} position={"sticky"}>
      <MessagesListHeader onSearch={onSearch} />

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
