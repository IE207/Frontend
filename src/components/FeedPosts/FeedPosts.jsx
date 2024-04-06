import {
  Container,
  VStack,
  Flex,
  Skeleton,
  SkeletonCircle,
  Box,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>contents wr</Box>
            </Skeleton>
          </VStack>
        ))}

      {!false && (
        <>
          <FeedPost img="/img-1.png" username="leylaaa" avatar="/user-1.png" />
          <FeedPost img="/img-2.png" username="chef_man" avatar="/user-2.png" />
          <FeedPost img="/img-3.png" username="oliva" avatar="/user-3.png" />
          <FeedPost img="/img-4.png" username="myy_boo" avatar="/user-4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
