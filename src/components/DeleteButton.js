import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import {TfiTrash } from "react-icons/tfi";

export function DeleteButton ({workId, onDelete}) {
    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/works/${workId}`, {
            method: 'DELETE'
        })
        .then(()=>{
            onDelete(workId);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    <Button leftIcon={<TfiTrash />} colorScheme='green' variant='solid' onClick={handleDeleteClick}>
        Delete
    </Button>
}