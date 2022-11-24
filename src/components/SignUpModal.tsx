import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import { FaUserCircle, FaLock, FaEnvelope, FaUserAlt } from "react-icons/fa"

interface SignUpModalProps {
    isOpen:boolean;
    onClose:() => void;
}

export default function SignUpModal({isOpen, onClose}:SignUpModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <VStack>
                    <InputGroup>
                        <InputLeftElement children={<Box color="gray.500"><FaUserAlt/></Box>}></InputLeftElement>
                        <Input variant={"filled"} placeholder="Name"/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement children={<Box color="gray.500"><FaEnvelope/></Box>}></InputLeftElement>
                        <Input variant={"filled"} placeholder="Mail"/>
                    </InputGroup>
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