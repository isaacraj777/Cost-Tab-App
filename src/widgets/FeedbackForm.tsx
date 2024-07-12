// src/widgets/FeedbackForm.tsx

import React, { useState } from 'react';
import { TextField, PrimaryButton, Stack } from '@fluentui/react';

const stackTokens = { childrenGap: 20 };

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('Submitting:', { name, feedback });
        // Optionally add your API submission logic here

        // Data to be sent to the server
        const formData = { name, feedback };
    
        // API endpoint where the Express.js server is listening
        const apiUrl = 'http://localhost:3000/api/create_resources';
    
        // Fetch API to POST data
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data from the server
            alert('Feedback submitted successfully!');
            console.log('Success:', data);
        })
        .catch((error) => {
            // Handle any errors
            console.error('Error:', error);
            alert('Error submitting feedback');
        });
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack tokens={stackTokens}>
                <TextField 
                    label="Name" 
                    value={name} 
                    onChange={(e, newValue) => setName(newValue || '')} 
                    required 
                />
                <TextField 
                    label="Feedbacks" 
                    value={feedback} 
                    onChange={(e, newValue) => setFeedback(newValue || '')} 
                    multiline 
                    rows={3} 
                    required 
                />
                <PrimaryButton text="Submit" type="submit" />
            </Stack>
        </form>
    );
};

export default FeedbackForm;
