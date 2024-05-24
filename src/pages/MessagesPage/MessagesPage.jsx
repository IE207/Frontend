import { Box, Container, Flex } from "@chakra-ui/react";
import MessagesList from "./MessagesList";
import MessagesDetail from "./MessagesDetail";
import { useState } from "react";
import MessagesListHeader from "./MessagesListHeader";

const sampleMessages = [
  {
    name: "Louis Pat",
    messages: [
      { text: "I wanna tell you...", time: "1h ago", sender: "Louis Pat" },
      { text: "How are you?", time: "50m ago", sender: "You" },
    ],
    avatar: "/sguser-1.png",
    isOnline: true,
  },
  {
    name: "Oliv Swan",
    messages: [
      { text: "I wanna tell you...", time: "1d ago", sender: "Oliv Swan" },
    ],
    avatar: "/sguser-2.png",
    isOnline: false,
  },
  {
    name: "Chauz Chauz",
    messages: [
      { text: "I wanna tell you...", time: "1d ago", sender: "Chauz Chauz" },
    ],
    avatar: "/sguser-3.png",
    isOnline: false,
  },
];

const MessagesPage = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleItemClick = (message) => {
    setSelectedMessage(message);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSendMessage = (text) => {
    if (selectedMessage) {
      const updatedMessages = messages.map((msg) => {
        if (msg.name === selectedMessage.name) {
          return {
            ...msg,
            messages: [
              ...msg.messages,
              { text, time: "just now", sender: "You" },
            ],
          };
        }
        return msg;
      });
      setMessages(updatedMessages);
      setSelectedMessage({
        ...selectedMessage,
        messages: [
          ...selectedMessage.messages,
          { text, time: "just now", sender: "You" },
        ],
      });
    }
  };

  const handleNewChat = () => {
    const newChat = {
      name: `New Chat ${messages.length + 1}`,
      messages: [],
      avatar: "/sguser-3.png",
      isOnline: false,
    };
    setMessages([newChat, ...messages]);
    setSelectedMessage(newChat);
  };

  const filteredMessages = messages.filter((msg) =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxW="container.lg" p={0}>
      <Flex>
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
            onNewChat={handleNewChat}
          />
        </Box>
        <Box flex={2} h="full">
          <MessagesDetail
            selectedMessage={selectedMessage}
            onSendMessage={handleSendMessage}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default MessagesPage;
