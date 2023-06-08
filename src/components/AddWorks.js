import { Box, Button, Center, Input, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { TfiSave } from "react-icons/tfi";

export function AddWorks () {
    //Creates an empty state for the title, artistId, creationDate, base64URL and liked fields and saves them to data entered in as a form
    const [formData, setFormData] = useState({
        title: '',
        artistId: '',
        creationDate: '',
        base64URL: '',
        liked: false
    })

    //Ensures that for each form field the data is entered as a state that can be read and stored
    const handleFormData =(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    //This code is used to invoke the function that converts images to base64 code
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        
        //As well as accesses the formData state and saves the converted image's code
        setFormData((prevFormData) => ({
          ...prevFormData,
          base64URL: base64,
        }));
    };
      
    //This function is used to convert images for works that are added into base64 code
    const convertToBase64 = (file) => {
        return new Promise ((resolve, reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)

            //Ensures the result is correctly saved
            fileReader.onload = ()=>{
                resolve(fileReader.result)
            }

            //Handles the occurence of an error when saving
            fileReader.onerror = (error)=>{
                reject(error)
            }
        })
    }

    useEffect(() => {
        // Empty dependency array to run the effect only once after initial render
    }, []);
    
    //This function creates a POST request that saves the created work's record to the backend
      const handleAddWork = () => {
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
        console.log(data);

        //Empties the formData state to show that the persistence is successful
        setFormData({
            title: '',
            artistId: '',
            creationDate: '',
            base64URL: '',
            liked: false
        });
        })
        //Logs out an error message if one occurs
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