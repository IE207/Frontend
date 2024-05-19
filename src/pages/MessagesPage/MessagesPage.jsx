import { Box, Container, Flex } from "@chakra-ui/react";
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
  const [messages] = useState(sampleMessages);
  const [selectedMessage, setSelectedMessage] = useState(sampleMessages[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleItemClick = (message) => {
    setSelectedMessage(message);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const foundMessage = messages.find((message) =>
      message.name.toLowerCase().includes(term.toLowerCase())
    );
    if (foundMessage) {
      setSelectedMessage(foundMessage);
    } else if (term === "") {
      setSelectedMessage(messages[0]);
    }
  };

  const filteredMessages = messages.filter((message) =>
    message.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


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
            messages={filteredMessages}
            onItemClick={handleItemClick}
            onSearch={handleSearch}
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
