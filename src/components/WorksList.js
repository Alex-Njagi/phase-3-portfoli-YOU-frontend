import {Card, CardBody, CardFooter, CardHeader, SimpleGrid, Text, Image } from '@chakra-ui/react';
import React from 'react';

export function WorksList ({works}) {
    return (
        <SimpleGrid spacing={10} minChildWidth='300px'>
            {works.map(work=>(
                <Card key={work.id}>
                    <CardHeader borderColor='black'>
                        <Image
                            alignSelf='center'
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '250px' }}
                            maxH={{ base: '100%', sm: '250px' }}
                            src={work.work_url}
                            alt={work.title}
                        />
                    </CardHeader>

                    <CardBody color='red.400'>
                        <Text>Title: {work.title}</Text>
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