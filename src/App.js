import { Container, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { WorksList } from "./components/WorksList";
import { useEffect, useState } from "react";
import Test from "./components/Test";


function App() {

  const [works, setWorks] = useState([]);

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

  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
      as="aside"
      colSpan="1"
      bg="purple.400"
      minHeight="100vh"
      p="30px"
      >
      <span>sidebar</span>
      </GridItem>

      <GridItem
      as="main"
      colSpan="5"
      p="40px"
      >
      <WorksList works={works}/>
      </GridItem>
    </Grid>
  )
}
{/*<Heading as='h2' padding='20px'>
            Welcome To Portfoli-YOU!
        </Heading>
      */}
export default App;
