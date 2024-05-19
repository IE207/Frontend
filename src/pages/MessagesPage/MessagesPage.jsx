import { Box, Button, Container, Flex } from "@chakra-ui/react";
import MessagesList from "./MessagesList";
import MessagesDetail from "./MessagesDetail";

const MessagesPage = () => {
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
          <MessagesList />
        </Box>
        <Box flex={2} h="full">
          <MessagesDetail />
        </Box>
      </Flex>
    </Container>
  );
};

export default MessagesPage;
