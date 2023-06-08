import { Box, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Text, Image, Link, Button, Stack } from '@chakra-ui/react';
import { TfiTrash } from "react-icons/tfi";
import { LikeButton } from './LikeButton';
import { useEffect } from 'react';


export function WorksList ({works}) {
    //This code handles the deletion of works by sending a DELETE request to the API
    const handleDelete = async (workId, workTitle) => {
        try {
          const response = await fetch(`http://localhost:9292/works/${workId}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            //Successfully alerts the user of a deletion
            alert(`Successfully deleted ${workTitle}! Please refresh the page`)
          } else {
            //Alerts the user of an error should it occur
            alert(`Oh No! Failed to delete record`)
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
                <Card key={work.id} bgColor="rgba(98, 60, 99, 0.85)" border="3px" borderRadius="15px" borderStyle="solid" borderColor="rgba(61, 245, 39, 0.39)" boxShadow="xl">
                    <CardHeader borderColor='black'>
                    <Box display="flex" justifyContent="center" alignItems="center" padding={4} backgroundColor="rgba(98, 60, 99, 0.52)" borderRadius="5px">
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            maxH={{ base: '100%', sm: '200px' }}
                            src={work.work_url}
                            alt={work.title}
                        />
                    </Box>
                    </CardHeader>

                    <CardBody color="whitesmoke">
                        <Link href={work.work_url} isExternal color="green.500" fontSize="20px"fontWeight="bold" _hover={{ textDecoration: "underline" }}>
                            Title: {work.title}
                        </Link>
                        <Text color="black" fontSize="13px">By: {work.artist.name}</Text>
                        <Text fontSize="15px">Date Of Creation: {work.creation_date}</Text>
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
