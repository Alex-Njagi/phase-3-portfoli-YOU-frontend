import { Input } from "@chakra-ui/react";

export function SearchWorks ({searchWorks, setSearchWorks}) {
    return (
        <Input 
            placeholder="Search for Works" 
            marginBottom="10px"
            value={searchWorks}
            onChange={(e)=> {setSearchWorks(e.target.value)}}
        />
    )
}