import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub} from "react-icons/fa"


export default function SocialLogin() {
    return (
        <Box>
            <HStack mt={5}>
                <Divider/>
                <Text textTransform={"uppercase"} color="gray.500" fontSize={"xs"} as="b">Or</Text>
                <Divider/>
            </HStack>
            <VStack my={3}>
                <Button leftIcon={<FaComment/>} colorScheme={"facebook"} w="100%">Continue with Github</Button>
                <Button leftIcon={<FaGithub/>} colorScheme={"yellow"} w="100%">Continue with Kakao</Button>\
            </VStack>
        </Box>
    )
}