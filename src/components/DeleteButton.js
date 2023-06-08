import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { TfiTrash } from "react-icons/tfi";

export function DeleteButton(id) {
    const [workId, setWorkId] = useState(id)

    useEffect(() => {
        const handleDeleteWork = async () => {
          if (workId) {
            try {
              const response = await fetch(`http://localhost:9292/works/${workId}`, {
                method: "DELETE"
              });
    
              if (response.ok) {
                console.log("Work deleted successfully");
                setWorkId('');
              } else {
                console.log("Failed to delete work");
              }
            } catch (error) {
              console.error("Error deleting work:", error);
            }
          }
        };
        handleDeleteWork();
      }, [workId]);

    return (
        <Button leftIcon={<TfiTrash />} colorScheme='green' variant='solid' disabled={!workId}>
          Delete
        </Button>
    )
}

//export function DeleteButton ({workId, onDelete}) {
  //  const handleDeleteClick = () => {
    //    fetch(`http://localhost:9292/works/${workId}`, {
      //      method: 'DELETE'
        //})
        //.then(()=>{
          //  onDelete(workId);
        //})
        //.catch(error => {
          //  console.error('Error:', error);
        //});
    //}

    //<Button leftIcon={<TfiTrash />} colorScheme='green' variant='solid' onClick={handleDeleteClick}>
      //  Delete
    //</Button>
//}