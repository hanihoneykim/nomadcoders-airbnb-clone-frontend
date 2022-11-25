import { Box, Grid, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import {FaStar} from "react-icons/fa"


export default function Home() {
    return (
    <Grid mt={10} px={40} columnGap={4} rowGap={8} templateColumns={"repeat(4, 1fr)"}>
        <VStack spacing={1} alignItems={"flex-start"}>
            <Box mb={3} overflow={"hidden"} rounded={"3xl"}>
                <Image
                h="220" 
                src="https://a0.muscache.com/im/pictures/miso/Hosting-716674445310682476/original/3dbb1597-6ac6-4877-bb08-7188742b8203.jpeg?im_w=720 "/>
            </Box>
            <Grid gap={2} templateColumns={"4fr 1fr"}>
                <Text as="b" noOfLines={1} fontSize="md">
                    Tskhvarichamia,Mtskheta-Mtianeti, 조지아
                </Text>
                <HStack spacing={1}>
                    <FaStar size={"15px"}/>
                    <Text>
                        4.7
                    </Text>
                </HStack>
            </Grid>
            <Text fontSize={"sm"} color="gray.500">
                Georgia, US
            </Text>
            <Text fontSize={"sm"} color="gray.500">
                <Text as="b">
                    $72 /night
                </Text>
            </Text>
        </VStack>
    </Grid>
    )
}