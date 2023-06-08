import {Box, Card, CardBody, CardFooter, CardHeader, Icon, SimpleGrid, Text, Image, Link, Button, Stack } from '@chakra-ui/react';
import { TfiTrash } from "react-icons/tfi";
import { LikeButton } from './LikeButton';
import { useEffect } from 'react';


export function WorksList ({works}) {
    const handleDelete = async (workId, workTitle) => {
        try {
          const response = await fetch(`http://localhost:9292/works/${workId}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            alert(`Successfully deleted ${workTitle}! Please refresh the page`)
            console.log('Record deleted successfully');
          } else {
            console.log('Failed to delete record');
          }
        } catch (error) {
          console.log('Error occurred while deleting record:', error);
        }
      };
    
      useEffect(() => {
        return () => {
        };
      }, []);

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
                        <Link href={work.work_url} isExternal color="blue.500" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
                            Title: {work.title}
                        </Link>
                        <Text color="black" fontSize="10px">By: {work.artist.name}</Text>
                        <Text>Date Of Creation: {work.creation_date}</Text>
                    </CardBody>


                    <CardFooter>
                        <Stack direction='row' spacing={4}>
                            <LikeButton workId={work.id} initialLiked={work.liked} />
                            <Button leftIcon={<TfiTrash />} colorScheme='green' variant='solid' onClick={(e) => handleDelete(work.id, work.title)}>
                                Delete
                            </Button>
                        </Stack>
                    </CardFooter>
                </Card>
            ))}
        </SimpleGrid>
    )
}
