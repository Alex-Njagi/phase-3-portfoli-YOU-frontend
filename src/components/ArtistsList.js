import { Box } from "@chakra-ui/react";
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

export function AritstsList ({artists}) {
    return (
        <Box maxH="150px" overflowY="auto" scrollMargin="10px" borderRadius="15px" margin="10px" border="3px" borderStyle="solid" borderColor="rgba(61, 245, 39, 0.39)">
          <TableContainer backgroundColor="rgba(98, 60, 99, 0.52)">
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
                                <Td border="3px" borderStyle="solid" borderColor="rgba(146, 39, 245, 0.27)">{artist.id}</Td>
                                <Td border="3px" borderStyle="solid" borderColor="rgba(146, 39, 245, 0.27)">{artist.name}</Td>
                                <Td border="3px" borderStyle="solid" borderColor="rgba(146, 39, 245, 0.27)">{artist.age}</Td>
                            </Tr>
                         ))}
                    </Tbody>
            </Table>
        </TableContainer>
        </Box>
      )
}
