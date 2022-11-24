import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import { FaUserCircle, FaLock } from "react-icons/fa"

interface LoginModalProps {
    isOpen:boolean;
    onClose:() => void;
}

export default function LoginModal({isOpen, onClose}:LoginModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Log in</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <VStack>
                    <InputGroup>
                        <InputLeftElement children={<Box color="gray.500"><FaUserCircle/></Box>}></InputLeftElement>
                        <Input variant={"filled"} placeholder="Username"/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement children={<Box color="gray.500"><FaLock/></Box>}></InputLeftElement>
                        <Input variant={"filled"} placeholder="Password"/>
                    </InputGroup>
                </VStack>
                <Button mt={4} colorScheme={"red"} w="100%">Log in</Button>
                <SocialLogin/>
            </ModalBody>
        </ModalContent>
    </Modal>
    )
}