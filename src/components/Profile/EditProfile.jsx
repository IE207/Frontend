import {
  Avatar,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const EditProfile = ({ isOpen, onClose }) => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    bio: "",
  });
  const handleEditProfile = () => {
    console.log(inputs);
  };
  const fileRef = useRef(null);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={"white"}
          boxShadow={"xl"}
          border={"1px solid gray"}
          mx={3}
        >
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            {/* Container Flex */}
            <Flex bg={"white"}>
              <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                bg={"white"}
                p={6}
                my={0}
              >
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                  Edit Profile
                </Heading>
                <FormControl>
                  <Stack direction={["column", "row"]} spacing={6}>
                    <Center>
                      <Avatar size="xl" src={"/profilepic.png"} border={"2px solid white "} />
                    </Center>
                    <Center w="full">
                      <Button w="full" onClick={() => fileRef.current.click()}>Edit Profile Picture</Button>
                    </Center>

                    <Input type="file" hidden ref={fileRef} />
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Full Name</FormLabel>
                  <Input
                    placeholder={"Full Name"}
                    size={"sm"}
                    type={"text"}
                    value={inputs.fullName}
                    onChange={(e) =>
                      setInputs({ ...inputs, fullName: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Username</FormLabel>
                  <Input
                    placeholder={"Username"}
                    size={"sm"}
                    type={"text"}
                    value={inputs.userName}
                    onChange={(e) =>
                      setInputs({ ...inputs, userName: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Bio</FormLabel>
                  <Input
                    placeholder={"Bio"}
                    size={"sm"}
                    type={"text"}
                    value={inputs.bio}
                    onChange={(e) =>
                      setInputs({ ...inputs, bio: e.target.value })
                    }
                  />
                </FormControl>

                <Stack spacing={6} direction={["column", "row"]}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    size="sm"
                    w="50%"
                    ml={"auto"}
                    _hover={{ bg: "blue.500" }}
                    onClick={handleEditProfile}
                  >
                    Save
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfile;
