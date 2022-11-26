import { Box, Button, Grid, HStack, Image, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import {FaStar, FaRegHeart} from "react-icons/fa"

interface IRoomProps {
    imageUrl:string;
    name:string;
    rating:string;
    city:string;
    country:string;
    price:number; 
}

export default function Room({imageUrl, name, rating, city, country, price} : IRoomProps) {
    const gray = useColorModeValue("gray.500", "gray.300")
    return (
        <VStack spacing={1} alignItems={"flex-start"}>
            <Box position={"relative"} mb={3} overflow={"hidden"} rounded={"3xl"}>
                <Image
                minH="220" 
                src={imageUrl}/>
                <Button _hover={{color:"red.400"}} variant={"unstyled"} position={"absolute"} top={2} right={1} color="white">    
                    <FaRegHeart size={"20px"} />
                </Button>    
            </Box>
            <Grid gap={2} templateColumns={"4fr 1fr"}>
                <Text as="b" noOfLines={1} fontSize="md">
                    {name}
                </Text>
                <HStack spacing={1}>
                    <FaStar size={"15px"}/>
                    <Text>
                        {rating}
                    </Text>
                </HStack>
            </Grid>
            <Text fontSize={"sm"} color={gray}>
                {city}, {country}
            </Text>
            <Text fontSize={"sm"} color={gray}>
                <Text as="b"> {price} </Text> /night
            </Text>
        </VStack>
    )
}