// ActiveResources.tsx
import React, { useEffect, useState } from 'react';
import { DetailsList, IColumn, IconButton, Stack } from '@fluentui/react';
import { IResource } from '../models/ActiveResourceModel';
import { fetchResources, deleteResource } from '../services/activeResourceService';
import  "../styles/ActiveResources.css";

const ActiveResources: React.FC = () => {
    const [resources, setResources] = useState<IResource[]>([]);

    useEffect(() => {
        const getInitialResources = async () => {
            const initialResources = await fetchResources();
            setResources(initialResources);
        };
        getInitialResources();
    }, []);

    const handleDelete = async (key: string) => {
        const updatedResources = await deleteResource(key);
        setResources(updatedResources);
    };
    

    const columns: IColumn[] = [
        { key: 'column1', name: 'Resource Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Created By', fieldName: 'createdBy', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'Cost', fieldName: 'cost', minWidth: 70, maxWidth: 100, isResizable: true },
        {
            key: 'column4',
            name: '',
            fieldName: 'delete',
            minWidth: 50,
            maxWidth: 50,
            onRender: (item: IResource) => (
                <IconButton iconProps={{ iconName: 'Delete' }} onClick={() => handleDelete(item.key)} ariaLabel="Delete resource" />
            )
        }
    ];

    return (
        <Stack className="container">
            <DetailsList
                items={resources}
                columns={columns}
                className="detailsList"
                setKey="set"
                layoutMode={0}  // Adjust layout mode as needed
                selectionPreservedOnEmptyClick={true}
                ariaLabelForSelectionColumn="Toggle selection"
                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            />
        </Stack>
    );
};

export default ActiveResources;