import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}

      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h="410px" border="none">
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            d="flex"
            border="none"
            pl="137px"
            bgGradient="linear(to-l,rgba(40,185,166,1),rgba(31,153,127,1), rgba(13,97,66,1))"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody
            d="flex"
            flexDir="column"
            justifyContent="center"
            paddingLeft="30%"
            border="none"
            bgGradient=" linear(to-l,rgba(80,221,203,1),rgba(72,225,193,1), rgba(18,183,122,1))"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              alignSelf="center"
              border="2px solid teal"
              mr={20}
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontWeight={5}
              as="b"
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
              mt={2}
              ml="-100px"
              border="none"
              pl={5}
            >
              Email: {user.email}
            </Text>
          </ModalBody>

          <ModalFooter
            bgGradient=" linear(to-l,rgba(80,221,203,1),rgba(72,225,193,1), rgba(18,183,122,1))"
            border="none"
          >
            <Button
              mr={3}
              onClick={onClose}
              colorScheme="teal"
              border=" 2px solid teal"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
