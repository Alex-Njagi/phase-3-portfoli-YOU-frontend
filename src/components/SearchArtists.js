import { Input } from "@chakra-ui/react";

export function SearchArtists ({searchArtists, setSearchArtists}) {
    return (
        <Input 
            placeholder="Search for Artists" 
            value={searchArtists}
            onChange={(e)=> {setSearchArtists(e.target.value)}}
        />
    )
}