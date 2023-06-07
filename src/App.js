import { Container, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { WorksList } from "./components/WorksList";
import { useEffect, useState } from "react";
import Test from "./components/Test";
import { Sidebar } from "./components/Sidebar";
import { SearchWorks } from "./components/SearchWorks";
import { SearchArtists } from "./components/SearchArtists";
import { AddArtists } from "./components/AddArtists";


function App() {

  const [works, setWorks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [searchWorks, setSearchWorks] = useState('');
  const [searchArtists, setSearchArtists] = useState('')

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

  const foundWorks = works.filter((work)=> work.title.toLowerCase().includes(searchWorks.toLowerCase())
  )
  const foundArtists = artists.filter((artist)=> artist.name.toLowerCase().includes(searchArtists.toLowerCase())
  )

  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
      as="aside"
      colSpan={{base: 6, lg: 2, xl: 1}}
      bg="purple.400"
      minHeight={{lg:"100vh"}}
      p={{base: "20px", lg: "30px"}}
      >
        <AddArtists />
        <SearchArtists searchArtists={searchArtists} setSearchArtists={setSearchArtists}/>
        <Sidebar artists={foundArtists}/>
      </GridItem>

      <GridItem
      as="main"
      colSpan={{base: 6, lg: 4, xl: 5}}
      p="40px"
      >
      <SearchWorks searchWorks = {searchWorks} setSearchWorks={setSearchWorks}/>
      <WorksList works={foundWorks}/>
      </GridItem>
    </Grid>
  )
}
{/*<Heading as='h2' padding='20px'>
      Welcome To Portfoli-YOU!
  </Heading>
      */}
export default App;
