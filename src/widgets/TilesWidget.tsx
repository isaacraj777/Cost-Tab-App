import React, { useState } from 'react';
import { Stack, Text, TextField, PrimaryButton, IStackTokens, IStackStyles } from '@fluentui/react';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();

const tileTokens: IStackTokens = { childrenGap: 10 };
const stackStyles: IStackStyles = { root: { width: 300, padding: 10, border: '1px solid #ccc', borderRadius: 5 } };
const stackTokens = { childrenGap: 20 };

interface TileData {
    id: string;
    title: string;
    description: string;
}

// Data for tiles
const tilesData: TileData[] = [
    { id: 'asp', title: 'App Service Plan', description: 'App Service Plan Azure' },
    { id: 'vm', title: 'Virtual Machine', description: 'Create Azure Virtual Machine' },
    { id: 'cosmos', title: 'Cosmos DB', description: 'Create Azure Cosmos DB' },
    { id: 'aml', title: 'Azure ML Services', description: 'Create Azure ML Services' },
    { id: 'dataFactory', title: 'Data Factory', description: 'Create Azure Data factory' }
];

// Tile Component
const Tile: React.FC<TileData> = ({ id, title, description }) => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Feedback submitted for ${title}: ${name} - ${feedback}`);
        console.log('Submitting:', { id, name, feedback });
    };

    return (
        <Stack tokens={tileTokens} styles={stackStyles}>
            <Text variant="mediumPlus" style={{ fontWeight: 'bold' }}>{title}</Text>
            <Text>{description}</Text>
            <form onSubmit={handleSubmit}>
                <Stack tokens={stackTokens}>
                    <TextField 
                        label="Resource Name" 
                        value={name} 
                        onChange={(e, newValue) => setName(newValue || '')} 
                        required 
                    />
                    <TextField 
                        label="Resource Group Name" 
                        value={feedback} 
                        onChange={(e, newValue) => setFeedback(newValue || '')} 
                        multiline 
                        rows={3} 
                        required 
                    />
                    <PrimaryButton text="Submit" type="submit" />
                </Stack>
            </form>
        </Stack>
    );
};

// Main Component that renders all tiles
const TilesGrid: React.FC = () => {
    return (
        <Stack tokens={{ childrenGap: 20 }} horizontal wrap>
            {tilesData.map(tile => (
                <Tile key={tile.id} {...tile} />
            ))}
        </Stack>
    );
};

export default TilesGrid;
