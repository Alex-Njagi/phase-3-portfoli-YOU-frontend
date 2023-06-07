import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { TfiHeart } from "react-icons/tfi";

const LikeButton = ({ workId, initialLiked }) => {
  const [liked, setLiked] = useState(initialLiked);

  // Function to handle the like button click event
  const handleLikeClick = () => {
    // Toggle the liked status
    const updatedLiked = !liked;

    // Send a PATCH request to update the liked status in the API
    fetch(`http://localhost:9292/works/${workId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        liked: updatedLiked,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Update the liked state variable with the response from the API
        setLiked(data.liked);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    /*<button onClick={handleLikeClick}>{liked ? 'Unlike' : 'Like'}</button>*/
    <Button leftIcon={<TfiHeart />} colorScheme='pink' variant='solid' _hover={{colorScheme: 'red'}} onClick={handleLikeClick}>
        {liked ? 'Unlike' : 'Like'}
    </Button>
  );
};

export default LikeButton;
