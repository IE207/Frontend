import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import EditProfile from "./EditProfile";

const ProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          name="Love Cooking"
          src="/profilepic.png"
          alt="Love Cooking logo"
        />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>love_cooking</Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"gray.200"}
              color={"black"}
              _hover={{ bg: "gray.400" }}
              size={{ base: "xs", md: "sm" }}
              onClick={onOpen}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              123
            </Text>
            followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              200
            </Text>
            following
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Love cooking
          </Text>
        </Flex>
        <Text fontSize={"sm"}>A person that loves cooking.</Text>
      </VStack>

      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;