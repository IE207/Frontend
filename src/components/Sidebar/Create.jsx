import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { CreatePostLogo } from "../../assets/constants";
import { BsFillImageFill } from "react-icons/bs";
import { useRef, useState } from "react";

const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imgRef = useRef(null);
  const [caption, setCaption] = useState("");

  return (
    <>
      <Tooltip
        hasArrow
        label={"Create"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
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
          <CreatePostLogo />
          <Box display={{ base: "none", md: "block" }}>Create</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent bg={"white"} border={"1px solid gray"}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Post caption..."
            />
            <Input type="file" hidden ref={imgRef} />
            <BsFillImageFill
              style={{
                marginTop: "15px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
              size={20}
              onClick={() => imgRef.current.click()}
            />
          </ModalBody>

          <ModalFooter>
            <Button>Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Create;
