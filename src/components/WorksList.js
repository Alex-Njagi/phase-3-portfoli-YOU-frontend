import {Box, Card, CardBody, CardFooter, CardHeader, Icon, SimpleGrid, Text, Image, Link, Button, Stack } from '@chakra-ui/react';
import { TfiHeart, TfiHeartBroken, TfiTrash } from "react-icons/tfi";
import { LikeButton } from './LikeButton';
//import { DeleteButton } from './DeleteButton';


export function WorksList ({works}) {

    return (
        <SimpleGrid spacing={10} minChildWidth='300px'>
            {works.map(work=>(
                <Card key={work.id}>
                    <CardHeader borderColor='black'>
                    <Box display="flex" justifyContent="center" alignItems="center" padding={4} backgroundColor='whitesmoke' borderRadius="5px">
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            maxH={{ base: '100%', sm: '200px' }}
                            src={work.work_url}
                            alt={work.title}
                        />
                    </Box>
                    </CardHeader>

                    <CardBody color='red.400'>
                        <Link href={work.work_url} color="blue.500" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
                            Title: {work.title}
                        </Link>
                        <Text color="black" fontSize="10px">By: {work.artist.name}</Text>
                        <Text>Date Of Creation: {work.creation_date}</Text>
                    </CardBody>


                    <CardFooter>
                        <Stack direction='row' spacing={4}>
                            <LikeButton workId={work.id} initialLiked={work.liked} />
                            {/*<DeleteButton workId={work.id} onDelete={handleDelete} />*/}
                            <Button leftIcon={<TfiTrash />} colorScheme='green' variant='solid' /*onClick={handleDeleteClick}*/>
                                Delete
                            </Button>
                        </Stack>
                    </CardFooter>
                </Card>
            ))}
        </SimpleGrid>
    )
}
