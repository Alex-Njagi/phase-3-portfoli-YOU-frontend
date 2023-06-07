import { SimpleGrid, Box, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Test () {
    const [base64URL, setBase64URL] = useState('');
    const uploadImage = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertToBase64(file)
        setBase64URL(base64);
        console.log(base64);
    }

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

    return (
        <Input 
            type="file" 
            onChange={(e)=>{
                uploadImage(e)
            }}
        />
    )
}