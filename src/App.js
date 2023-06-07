import { Container, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { WorksList } from "./components/WorksList";
import { useEffect, useState } from "react";


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
    <Grid templateColumns="repeat (6, 1fr)" bgColor="gray.50">
      <GridItem
        as="main"
        colSpan="5"
        p="40px"
      >
        <Heading as='h2' padding='20px'>
            Welcome To Portfoli-YOU!
        </Heading>

        <WorksList works={works}/>
      </GridItem>
        
        <div>Form</div>
    </Grid>
  )
}

export default App;
