import {Box, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Text, Image, Link } from '@chakra-ui/react';
import React from 'react';

export function WorksList ({works}) {
    return (
        <SimpleGrid spacing={10} minChildWidth='300px'>
            {works.map(work=>(
                <Card key={work.id}>
                    <CardHeader borderColor='black'>
                    <Box display="flex" justifyContent="center" alignItems="center" padding={4} backgroundColor='whitesmoke'>
                        <Image
                            
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '250px' }}
                            maxH={{ base: '100%', sm: '250px' }}
                            src={work.work_url}
                            alt={work.title}
                        />
                    </Box>
                    </CardHeader>

                    <CardBody color='red.400'>
                        <Link href={work.work_url} color="blue.500" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
                            Title: {work.title}
                        </Link>
                        <Text>Date Of Creation: {work.created_at}</Text>
                    </CardBody>

                    <CardFooter>
                        <Text>Card Footer</Text>
                    </CardFooter>
                </Card>
            ))}
        </SimpleGrid>
    )
}