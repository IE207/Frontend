import { Box, Button, Container, Flex } from "@chakra-ui/react";
import MessagesList from "./MessagesList";
import MessagesDetail from "./MessagesDetail";
import { useState, useEffect } from "react";

const sampleMessages = [
  {
    name: "Louis Pat",
    messages: "I wanna tell you...",
    avatar: "/sguser-1.png",
    time: "1h ago",
    isOnline: true,
  },
  {
    name: "Oliv Swan",
    messages: "I wanna tell you...",
    avatar: "/sguser-2.png",
    time: "1d ago",
    isOnline: false,
  },
  {
    name: "Chauz Chauz",
    messages: "I wanna tell you...",
    avatar: "/sguser-3.png",
    time: "1d ago",
    isOnline: false,
  },
];

const MessagesPage = () => {
  const [selectedMessage, setSelectedMessage] = useState(
    sampleMessages.length > 0 ? sampleMessages[0] : null
  );

  const handleItemClick = (message) => {
    setSelectedMessage(message);
  };

  return (
    <Container maxW="container.lg" h="100vh" p={0}>
      <Flex h="full">
        <Box
          flex={1}
          display={{ base: "none", lg: "block" }}
          maxW="300px"
          borderRight="1px solid"
          borderColor="gray.200"
          p={4}
          position={"sticky"}
          top={0}
        >
          <MessagesList
            messages={sampleMessages}
            onItemClick={handleItemClick}
          />
        </Box>
        <Box flex={2} h="full">
          <MessagesDetail selectedMessage={selectedMessage} />
        </Box>
      </Flex>
    </Container>
  );
};

export default MessagesPage;
