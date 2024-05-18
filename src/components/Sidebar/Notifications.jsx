import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Portal,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";
import { useRef } from "react";
import Notification from "./Notification";

const Notifications = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initRef = useRef();

  return (
    <>
      <Tooltip
        hasArrow
        label={"Notifications"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Popover
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          initialFocusRef={initRef}
          closeOnBlur={false}
          modifiers={[
            {
              name: "offset",
              options: {
                offset: [-185, 20],
              },
            },
          ]}
        >
          <PopoverTrigger>
            <Flex
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "gray.200" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
              onClick={onOpen}
            >
              <NotificationsLogo />
              <Box display={{ base: "none", md: "block" }}>Notifications</Box>
            </Flex>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverHeader fontWeight={"bold"}>Notifications</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Notification
                  name="Louis Pat"
                  avatar="/sguser-1.png"
                  action="liked your post."
                  time="1h ago"
                />
                <Notification
                  name="Oliv Swan"
                  avatar="/sguser-2.png"
                  action="liked your post."
                  time="1d ago"
                />
                <Notification
                  name="Chauz Chauz"
                  avatar="/sguser-3.png"
                  action="commented on your post."
                  time="1d ago"
                />
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Tooltip>
    </>
  );
};

export default Notifications;
