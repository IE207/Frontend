import { Box, Flex } from "@chakra-ui/react";
import MessagesDetailHeader from "./MessagesDetailHeader";
import MessagesDetailFooter from "./MessagesDetailFooter";

const MessagesDetail = () => {
  return (
    <Flex direction="column" h="full">
      <MessagesDetailHeader />
      <Box flex="1" overflowY="auto" p={4} bg="gray.50">
        {/* Messages will go here */}
      </Box>
      <MessagesDetailFooter />
    </Flex>
  );
};

export default MessagesDetail;
