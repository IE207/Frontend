import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import MessagesDetailHeader from "./MessagesDetailHeader";
import MessagesDetailFooter from "./MessagesDetailFooter";

const MessagesDetail = ({ selectedMessage, onSendMessage }) => {
  return (
    <Flex direction="column" h="full">
      {selectedMessage ? (
        <>
          <MessagesDetailHeader selectedMessage={selectedMessage} />
          <Box flex="1" overflowY="auto" p={4} bg="gray.50">
            {/* Nội dung tin nhắn */}
            <VStack spacing={4} align="stretch">
              {selectedMessage.messages.map((msg, index) => (
                <Flex
                  key={index}
                  alignSelf={msg.sender === "You" ? "flex-end" : "flex-start"}
                  bg={msg.sender === "You" ? "blue.100" : "gray.100"}
                  color={msg.sender === "You" ? "black" : "black"}
                  p={3}
                  borderRadius="md"
                  shadow="sm"
                  maxWidth="80%"
                >
                  <Box>
                    <Text fontSize={14}>{msg.text}</Text>
                    <Text fontSize={12} color="gray.500" textAlign="right">
                      {msg.time}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Box>
          <Box mt={"auto"}>
            <MessagesDetailFooter onSendMessage={onSendMessage} />
          </Box>
        </>
      ) : (
        <Box flex="1" p={4} bg="gray.50">
          Chọn một tin nhắn để xem chi tiết
        </Box>
      )}
    </Flex>
  );
};

export default MessagesDetail;
