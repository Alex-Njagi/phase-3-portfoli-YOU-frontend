import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { TfiHeart } from "react-icons/tfi";

export function LikeButton ({ workId, initialLiked }) {
  //Creates a state for the "liked" field in the backend and sets it to the value fetched from the API
  const [liked, setLiked] = useState(initialLiked);

  //This function handles the clicking of the like button
  const handleLikeClick = () => {
    const updatedLiked = !liked;

    //This code sends a PATCH request to the API that updates the "liked" status of a posted work
    fetch(`http://localhost:9292/works/${workId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        liked: updatedLiked,
      }),
    })
      .then(res => res.json())
      .then(works => {
        //Updates the state of "liked"
        setLiked(works.liked);
      })
      //Logs an error message should one occur
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <Button leftIcon={<TfiHeart />} colorScheme='pink' variant='solid' _hover={{colorScheme: 'red'}} onClick={handleLikeClick} style={{ backgroundColor: liked ? "red" : "pink" }}>
        {liked ? 'Unlike' : 'Like'}
    </Button>
  );
};
