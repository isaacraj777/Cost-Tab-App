import React, { useEffect, useState } from 'react';
import { IFinancialData } from '../models/FinancialDataModel';
import { getFinancialData } from '../services/financialDataService';
import '../styles/HeaderTile.css'; // Ensure the path is correct

const HeaderTile: React.FC = () => {
    const [financialData, setFinancialData] = useState<IFinancialData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFinancialData();
            setFinancialData(data);
        };
        fetchData();
    }, []);

    if (!financialData) return <div>Loading...</div>; // Loading indicator

    return (
        <div className="headerContainer">
            <p> Dashboard</p>
        <div className="headerTile">
            <div className="titleBox">
                <span className="titleText">Available Budget (USD)</span>
                <span className="valueText">${financialData.availableBudget.toLocaleString()}</span>
            </div>
            <div className="titleBox">
                <span className="titleText">Actual Cost MTD (USD)</span>
                <span className="valueText">${financialData.actualCost.toLocaleString()}</span>
            </div>
            <div className="titleBox">
                <span className="titleText">Forecast Cost (USD)</span>
                <span className="valueText">${financialData.forecastCost.toLocaleString()}</span>
            </div>
        </div>
        </div>
        
    );
};

export default HeaderTile;


