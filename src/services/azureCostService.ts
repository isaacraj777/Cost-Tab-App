import axios from 'axios';
import { getAccessToken } from './tokenService';

interface QueryParameters {
    type: string;
    timeframe: string;
    timePeriod: { from: string, to: string };
    dataset: {
        granularity: string;
        aggregation: {
            totalCost: {
                name: string;
                function: string;
            }
        };
    };
}

export const fetchCostData = async () => {
    const token = await getAccessToken();
    if (!token) {
        console.error("Failed to retrieve access token");
        return;
    }

    const config = {
        headers: { 'Authorization': `Bearer ${token}` }
    };
    const startDate = '2021-01-01';
    const endDate = '2021-01-31';
    const subscriptionId = '256180a0-fe58-413f-bb20-a36fb9712a7f';
    const url = `https://management.azure.com/subscriptions/${subscriptionId}/providers/Microsoft.CostManagement/query?api-version=2019-11-01`;

    const data: QueryParameters = {
        type: 'Usage',
        timeframe: 'Custom',
        timePeriod: { from: startDate, to: endDate },
        dataset: {
            granularity: 'Daily',
            aggregation: {
                totalCost: {
                    name: 'PreTaxCost',
                    function: 'Sum'
                }
            }
        }
    };

    try {
        const response = await axios.post(url, data, config);
        return response.data; // This might need to be transformed depending on how you want to use it
    } catch (error) {
        console.error('Error fetching cost data:', error);
        return;
    }
};
