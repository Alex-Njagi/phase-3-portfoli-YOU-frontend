import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { TfiSave } from "react-icons/tfi";

export function AddWorks () {
    const [formData, setFormData] = useState({
        title: '',
        artistId: '',
        creationDate: '',
        base64URL: '',
        liked: false
    })

    const handleFormData =(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
      
        setFormData((prevFormData) => ({
          ...prevFormData,
          base64URL: base64,
        }));
    };
      
    const convertToBase64 = (file) => {
        return new Promise ((resolve, reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)

            fileReader.onload = ()=>{
                resolve(fileReader.result)
            }

            fileReader.onerror = (error)=>{
                reject(error)
            }
        })
    }

    useEffect(() => {
        // Empty dependency array to run the effect only once after initial render
    }, []);
    
      const handleAddWork = () => {
        // Make a PUT request to the API endpoint
        fetch('http://localhost:9292/works', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: formData.title,
            artist_id: formData.artistId,
            creation_date: formData.creationDate,
            work_url: formData.base64URL,
            liked: formData.liked
          })
        })
        .then((res) => res.json())
        .then((data) => {
        console.log(data); // Assuming the response contains the created record data

        // Clear the form data
        setFormData({
            title: '',
            artistId: '',
            creationDate: '',
            base64URL: '',
            liked: false
        });
        })
        .catch((error) => {
        console.error(error);
      });
    };

    return (
        <Box direction="column"  backgroundColor="white" padding="10px">
            <Text textAlign="center">Add Works</Text>
            <Input placeholder="Title" width="240px" margin="5px" value={formData.title} name="title" onChange={handleFormData}></Input>
            <Input placeholder="Artist ID" width="105px" margin="5px" value={formData.artistId} onChange={handleFormData} name="artistId"></Input>
            <Input placeholder="Creation Date" width="240px" margin="5px" type="date" value={formData.creationDate} onChange={handleFormData} name="creationDate"></Input>
            <Input 
                type="file"
                name="base64URL"
                
                onChange={(e)=>{
                    uploadImage(e)
                }}
            />
            <Box justifyContent="center" alignItems="center">
                <Button leftIcon={<TfiSave />} colorScheme='blue' variant='solid' margin="5px" size="sm" onClick={handleAddWork}>
                    Save
                </Button>
            </Box>
        </Box>
    )
}