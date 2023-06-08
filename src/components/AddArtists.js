import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { TfiSave } from "react-icons/tfi";

export function AddArtists() {
    const [formData, setFormData] = useState({
        name: '',
        age: ''
    })

    const handleFormData =(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        // Empty dependency array to run the effect only once after initial render
      }, []);
    
      const handleAddArtist = () => {
        // Make a PUT request to the API endpoint
        fetch('http://localhost:9292/artists', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);

        setFormData({
          name: "",
          age: ""
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

    return (
        <Box direction="row" backgroundColor="rgba(98, 60, 99, 0.52)" border="3px" borderRadius="15px" borderStyle="solid" borderColor="rgba(61, 245, 39, 0.39)" boxShadow="xl" padding="10px" margin="10px">
            <Text textAlign="center" color="rgba(39, 245, 86, 1)" fontWeight="bold" letterSpacing="15px">artists</Text>
            <Input placeholder="Name" width="170px" margin="5px" value={formData.name} name="name" onChange={handleFormData}></Input>
            <Input placeholder="Age" width="105px" margin="5px" value={formData.age} name="age" onChange={handleFormData}></Input>
            <Button leftIcon={<TfiSave />} backgroundColor="rgba(61, 245, 39, 0.39)" variant='solid' margin="5px" onClick={handleAddArtist} size="sm">
            </Button>
        </Box>
    )
}