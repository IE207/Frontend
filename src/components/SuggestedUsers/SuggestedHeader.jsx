import { Avatar, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Love cooking" size={"md"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          love_cooking
        </Text>
      </Flex>

      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        _hover={{ color: "blue.800" }}
        cursor={"pointer"}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
