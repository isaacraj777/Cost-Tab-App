import React from 'react';
import { Stack, Text, DefaultButton, IStackTokens, IStackStyles } from '@fluentui/react';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();

const sectionTokens: IStackTokens = { childrenGap: 10, padding: 10 };
const sectionStyles: IStackStyles = { root: { width: '100%', border: '1px solid #ccc', borderRadius: 5, padding: 10 } };

// Data for the sections
const sectionsData = [
    {
        title: 'Active Tasks',
        details: '74 tasks running',
        buttonLabel: 'View Tasks'
    },
    {
        title: 'Datasets',
        details: '20 datasets available',
        buttonLabel: 'Manage Datasets'
    },
    {
        title: 'Upload Files',
        details: 'Upload new data files',
        buttonLabel: 'Upload'
    }
];

// Section Component
const SectionTile: React.FC<{ title: string, details: string, buttonLabel: string }> = ({ title, details, buttonLabel }) => (
    <Stack tokens={sectionTokens} styles={sectionStyles}>
        <Text variant="medium" style={{ fontWeight: 'bold' }}>{title}</Text>
        <Text>{details}</Text>
        <DefaultButton text={buttonLabel} primary />
    </Stack>
);

// Main Component that renders all sections
const RightHandTiles: React.FC = () => {
    return (
        <Stack tokens={{ childrenGap: 20 }} grow={1}>
            {sectionsData.map((section, index) => (
                <SectionTile key={index} title={section.title} details={section.details} buttonLabel={section.buttonLabel} />
            ))}
        </Stack>
    );
};

export default RightHandTiles;

