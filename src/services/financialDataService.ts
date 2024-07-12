// financialDataService.ts
import { IFinancialData } from '../models/FinancialDataModel';

// Mock function to simulate fetching data from an API
export const getFinancialData = async (): Promise<IFinancialData> => {
    // This would typically be an API call
    return new Promise(resolve => setTimeout(() => {
        resolve({
            availableBudget: 10000,
            actualCost: 5000,
            forecastCost: 8000
        });
    }, 1000));
};
