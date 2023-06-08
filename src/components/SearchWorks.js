import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { TfiSearch } from "react-icons/tfi";

//This component is responsible for searching for artists in the artists table
export function SearchWorks ({searchWorks, setSearchWorks}) {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents="none"
                children={<TfiSearch color="gray.300" />}
            />
            <Input 
                borderStyle="solid" borderColor="rgba(61, 245, 39, 0.39)"
                borderRadius="15px"
                placeholder= "Search for Works"
                marginBottom="10px"
                value={searchWorks}
                onChange={(e)=> {setSearchWorks(e.target.value)}}
            />
        </InputGroup>
    )
}