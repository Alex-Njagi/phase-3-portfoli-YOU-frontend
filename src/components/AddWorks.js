import { Box, Button, Center, Input, Text } from "@chakra-ui/react"
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
        <Box direction="column" backgroundColor="rgba(98, 60, 99, 0.52)" padding="10px" border="3px" borderRadius="15px" borderStyle="solid" borderColor="rgba(61, 245, 39, 0.39)" boxShadow="xl">
            <Text textAlign="center" color="rgba(39, 245, 86, 1)" fontWeight="bold" letterSpacing="15px">works</Text>
            <Input placeholder="Title" width="240px" margin="5px" value={formData.title} name="title" onChange={handleFormData}></Input>
            <Input placeholder="Artist ID" width="105px" margin="5px" value={formData.artistId} onChange={handleFormData} name="artistId"></Input>
            <Input placeholder="Creation Date" width="240px" margin="5px" type="date" value={formData.creationDate} onChange={handleFormData} name="creationDate"></Input>
            <Input 
                type="file"
                name="base64URL"
                accept=".jpg,.jpeg,.png,.gif"
                onChange={(e)=>{
                    uploadImage(e)
                }}
            />
            <Center>
                <Button leftIcon={<TfiSave />} colorScheme='green' variant='solid' margin="5px" size="sm" onClick={handleAddWork}>
                    Save
                </Button>
            </Center>
        </Box>
    )
}