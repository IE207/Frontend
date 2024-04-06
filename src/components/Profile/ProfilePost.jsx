import {
  Flex,
  Box,
  GridItem,
  Text,
  Image,
  Avatar,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 0.8 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          color={"white"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                1000
              </Text>
            </Flex>

            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                1000
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image
          src={img}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"white"} pb={5}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={img} alt="profile pic" />
              </Box>

              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src="/profilepic.png"
                      size={"sm"}
                      name="Love Cooking"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      love_cooking
                    </Text>
                  </Flex>

                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>

                <Divider my={4} bg={"gray.500"} />

                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt="5h ago"
                    username="leylaaaa"
                    profilePic="/user-1.png"
                    text={"What a delicious meal!"}
                  />

                  <Comment
                    createdAt="2d ago"
                    username="chef_man"
                    profilePic="/user-2.png"
                    text={"I wanna eat it!"}
                  />

                  <Comment
                    createdAt="1w ago"
                    username="oliva"
                    profilePic="/user-3.png"
                    text={"Nice!!!"}
                  />

                  <Comment
                    createdAt="1w ago"
                    username="myy_boo"
                    profilePic="/user-4.png"
                    text={"Love it!"}
                  />
                </VStack>

                <Divider my={4} bg={"gray.800"} />

                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
