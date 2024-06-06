import { Recommendations } from "@/app/components";
import { Badge, Card, CardBody, CardFooter, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { recommendationsPropertyArray } from "../../../../recommendationsPropertyArray";
import { Image } from "@chakra-ui/next-js";

function Properties(){
    return(
        <>
            <Recommendations />
            <Flex bg="white" justifyContent="center">
            <Flex flexDir="column" p={8}  width="1280px" gap={4}>
                <Heading fontSize="1.2rem" fontWeight={600}>
                매물
                </Heading>
                <Flex flex="auto" flexDir= "row"flexWrap="wrap" gap={4} justifyContent="center">
                    {recommendationsPropertyArray.map((property,i) => (
                        <Card 
                            shadow="lg" 
                            width={340} 
                            mb={6} 
                            key={property.id} 
                            transition="0.3s ease-in-out" 
                            cursor="pointer" 
                            _hover={{transform:"scale(1.05)", shadow:"xl"}}
                            _active={{transform:"scale(1.02)"}}
                            >
                            <CardBody>
                                <Image
                                    src={property.imageUrl}
                                    alt={property.title}
                                    borderRadius="lg"
                                    width={400}
                                    height={240}
                                />
                                    <Flex gap={2} mt={4}>
                                        <Badge fontSize='0.8em' colorScheme='red'>
                                            급매
                                        </Badge>
                                        <Badge fontSize='0.8em' colorScheme='blue'>
                                            신규
                                        </Badge>
                                        <Badge fontSize='0.8em' colorScheme='yellow'>
                                            흥정가능
                                        </Badge>
                                    </Flex>
                                <Stack mt={2} spacing={0}>
                                    <Heading size="md">
                                    {property.title}
                                    </Heading>
                                    <Text>
                                    {property.description}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter alignItems="center" justifyContent="space-between">
                                <Badge
                                    fontSize="1.0rem"
                                    variant="solid"
                                    colorScheme="facebook"
                                >
                                    {property.salesType}
                                </Badge>
                                <Text color="primary.600" fontSize="xl">
                                    {property.price}
                                </Text>
                            </CardFooter>
                        </Card>
                    ))}
                </Flex>
            </Flex>
            </Flex>
        </>
    )
}

export default Properties;