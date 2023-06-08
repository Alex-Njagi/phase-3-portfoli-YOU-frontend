import { Input, Box, Center, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { TfiSearch } from "react-icons/tfi";

export function SearchArtists ({searchArtists, setSearchArtists}) {
    return (
        <Center>
            <Box alignItems="center" justifyContent="center">
                <InputGroup>
                    <InputLeftElement
                    pointerEvents="none"
                    children={<TfiSearch color="gray.300" />}
                    />
                    <Input 
                        borderStyle="solid" borderColor="rgba(61, 245, 39, 0.39)"
                        placeholder="Search for Artists" 
                        value={searchArtists}
                        onChange={(e)=> {setSearchArtists(e.target.value)}}
                        width="250px"
                        borderRadius="15px"
                    />
                </InputGroup>
            </Box>
        </Center>
    )
}