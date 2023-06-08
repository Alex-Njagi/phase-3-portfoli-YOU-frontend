import { Box, Center, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { WorksList } from "./components/WorksList";
import { useEffect, useState } from "react";
import { AritstsList } from "./components/ArtistsList";
import { SearchWorks } from "./components/SearchWorks";
import { SearchArtists } from "./components/SearchArtists";
import { AddArtists } from "./components/AddArtists";
import { AddWorks } from "./components/AddWorks";
import './App.css';


function App() {
  //Creates an empty state for storing works
  const [works, setWorks] = useState([]);
  //Creates an empty state for storing artists
  const [artists, setArtists] = useState([]);
  //Creates an empty state for search for works
  const [searchWorks, setSearchWorks] = useState('');
  //Creates an empty state for search for artists
  const [searchArtists, setSearchArtists] = useState('')

  //This code uses a GET request to the API to fetch all the works
  useEffect (()=>{
    fetch('http://localhost:9292/works', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res)=>res.json())
    .then ((works)=> setWorks(works))
  }, [])

  //This code uses a GET request to the API to fetch all the artists
  useEffect (()=>{
    fetch('http://localhost:9292/artists', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res)=>res.json())
    .then ((artists)=> setArtists(artists))
  }, [])

  //Filters the works on the basis of the title by using the searchWorks state
  const foundWorks = works.filter((work)=> work.title.toLowerCase().includes(searchWorks.toLowerCase())
  )
  //Filters the artists on the basis of the name by using the searchWorks state
  const foundArtists = artists.filter((artist)=> artist.name.toLowerCase().includes(searchArtists.toLowerCase())
  )

  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{base: 6, lg: 2, xl: 1}}
        bgColor="rgba(98, 60, 99, 0.52)"
        minHeight={{lg:"100vh"}}
        p={{base: "20px", lg: "30px"}}
        position="relative"
      >
        <Box 
          position="sticky"
          top="8"
          transform="translateY(0)"
          zIndex="1"
          borderRadius="10px"
        >
          <Heading>
            <Center>
              <Text 
                fontFamily="Pacifico"
                letterSpacing="25px"
                color="green.300"
                paddingBottom="5px"
              >
                portfoliyou
              </Text>
            </Center>
          </Heading>
          <AddArtists />    {/*Renders the component for adding artists*/}
          <SearchArtists searchArtists={searchArtists} setSearchArtists={setSearchArtists}/>    {/*Renders the component for searching for artists*/}
          <AritstsList artists={foundArtists}/>   {/*Renders the component for displaying artists*/}
            <Box padding="10px">
              <AddWorks />    {/*Renders the component for adding works*/}
            </Box>
        </Box>
      </GridItem>

      <GridItem
        as="main"
        colSpan={{base: 6, lg: 4, xl: 5}}
        p="40px"
        bgColor="rgba(98, 60, 99, 0.52)"
      >
        
        <SearchWorks searchWorks = {searchWorks} setSearchWorks={setSearchWorks}/>    {/*Renders the component for search for works*/}
        <WorksList works={foundWorks}/>   {/*Renders the component for displaying works*/}
      </GridItem>
    </Grid>
  )
}

export default App;