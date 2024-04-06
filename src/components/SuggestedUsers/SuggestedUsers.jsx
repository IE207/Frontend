import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name="Louis Pat"
        followers={1080}
        avatar="/sguser-1.png"
      />
      <SuggestedUser
        name="Oliv Swan"
        followers={740}
        avatar="/sguser-2.png"
      />
      <SuggestedUser
        name="Chauz Chauz"
        followers={964}
        avatar="/sguser-3.png"
      />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Build By{" "}
        <Link
          href=""
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          App
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
