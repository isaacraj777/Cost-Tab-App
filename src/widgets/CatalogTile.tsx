import React, { useEffect, useState } from 'react';
import { IFinancialData } from '../models/FinancialDataModel';
import { getFinancialData } from '../services/financialDataService';
import '../styles/HeaderTile.css'; // Ensure the path is correct

const CatalogTile: React.FC = () => {
    const [financialData, setFinancialData] = useState<IFinancialData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFinancialData();
            setFinancialData(data);
        };
        fetchData();
    }, []);

    if (!financialData) return <div>Loading...</div>; // Loading indicator

    // Deep link URL to the chatbot
    const chatbotDeepLink = 'https://teams.microsoft.com/l/chat/0/0?users=28:7836d570-f336-40b1-8430-234a3a2df463';

    return (
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
            <div className="buttonBox">
                <button 
                    className="chatbotButton"
                    onClick={() => window.open(chatbotDeepLink, '_blank')}
                >
                    Open Chatbot
                </button>
            </div>
        </div>
    );
};

export default CatalogTile;
