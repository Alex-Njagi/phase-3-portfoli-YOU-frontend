import { Container, Heading, VStack } from "@chakra-ui/react";
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
    <Container>
      <VStack>
        <Heading as='h2' padding='20px'>
          Welcome To Portfoli-YOU!
        </Heading>

        <WorksList works={works}/>
        
        <div>Form</div>
      </VStack>
    </Container>
  )
}

export default App;
