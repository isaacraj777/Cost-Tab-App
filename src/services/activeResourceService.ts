// resourceService.ts
import { IResource } from '../models/ActiveResourceModel';

// Initial resource data
const resources: IResource[] = [
    { key: '1', name: 'Cosmos DB', createdBy: 'Cameron Williamson', cost: '$1500' },
    { key: '2', name: 'App Service Plan', createdBy: 'Savannah Nguyen', cost: '$2000' },
    { key: '3', name: 'Key Vault', createdBy: 'Darlene Robertson', cost: '$5000' }
];

// Fetching resources (simulation of an async operation)
export const fetchResources = async (): Promise<IResource[]> => {
    // Simulate fetching data from an API
    return new Promise(resolve => setTimeout(() => resolve(resources), 500));
};

// Delete resource
export const deleteResource = async (key: string): Promise<IResource[]> => {
    const index = resources.findIndex(resource => resource.key === key);
    if (index > -1) {
        resources.splice(index, 1);
    }
    return new Promise(resolve => setTimeout(() => resolve(resources), 500));
};
