import { Box, List, ListItem } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
import React from "react";

export function Sidebar ({artists}) {
    return (
        <Box maxH="300px" overflowY="auto" scrollMargin="10px" borderRadius="5px" margin="10px">
        
          <TableContainer backgroundColor="white">
            <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Artist ID</Th>
                            <Th>Artist</Th>
                            <Th>Age</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                         {artists.map((artist)=>(
                            <Tr key={artist.id}>
                                <Td>{artist.id}</Td>
                                <Td>{artist.name}</Td>
                                <Td>{artist.age}</Td>
                            </Tr>
                         ))}
                    </Tbody>
            </Table>
        </TableContainer>
        </Box>
      )
}
