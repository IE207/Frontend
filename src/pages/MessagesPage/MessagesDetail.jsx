import { Box, Flex } from "@chakra-ui/react";
import MessagesDetailHeader from "./MessagesDetailHeader";
import MessagesDetailFooter from "./MessagesDetailFooter";

const MessagesDetail = ({ selectedMessage }) => {
  return (
    <Flex direction="column" h="full">
      {selectedMessage ? (
        <>
          <MessagesDetailHeader selectedMessage={selectedMessage} />
          <Box flex="1" overflowY="auto" p={4} bg="gray.50">
            {/* Nội dung tin nhắn */}
            <Box fontSize={14} color={"gray.500"}>
              {selectedMessage.messages}
            </Box>
          </Box>
          <MessagesDetailFooter />
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
