import { Box, Button, Container, Flex, VStack } from "@chakra-ui/react";
import MessagesListHeader from "./MessagesListHeader";
import MessagesElement from "./MessagesElement";

const MessagesList = () => {
  return (
    <Box height={"100vh"} top={0} position={"sticky"}>
      <MessagesListHeader />

      <MessagesElement
        name="Louis Pat"
        messages="I wanna tell you..."
        avatar="/sguser-1.png"
        time="1h ago"
      />
      <MessagesElement
        name="Oliv Swan"
        messages="I wanna tell you..."
        avatar="/sguser-2.png"
        time="1d ago"
      />
      <MessagesElement
        name="Chauz Chauz"
        messages="I wanna tell you..."
        avatar="/sguser-3.png"
        time="1d ago"
      />
    </Box>
  );
};

export default MessagesList;
