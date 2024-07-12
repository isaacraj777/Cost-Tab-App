import React from 'react';
import '../styles/CostWidget.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CostWidget: React.FC = () => {
    const data = {
        labels: ['AWS', 'Microsoft Azure', 'Google Cloud'],
        datasets: [
            {
                data: [548213.34, 345694.28, 103787.37],
                backgroundColor: ['#a5f3dc', '#ffde8b', '#d4b4ff'],
                hoverBackgroundColor: ['#a5f3dc', '#ffde8b', '#d4b4ff'],
            },
        ],
    };

    return (
        <div className="costWidget">
            <div className="costPieChart">
                <Pie data={data}/>
            </div>
            <div className='section2'>
            <div className="costHeader">
            <h2 className="headerTitle">Provider Cost</h2>
            <div className="costDetails">
                <div className="costDetail">
                    <h3>AWS</h3>
                    <p>$548,213</p>
                </div>
                <div className="costDetail">
                    <h3>Azure</h3>
                    <p>$345,694</p>
                </div>
                <div className="costDetail">
                    <h3>GCP</h3>
                    <p>$103,787</p>
                </div>
            </div>
            </div>
            <div className="costHeader">
            <h2 className="headerTitle">Billed Cost</h2>
            <div className="costDetails">
                <div className="costDetail">
                    <h3>AWS</h3>
                    <p>$554,858</p>
                </div>
                <div className="costDetail">
                    <h3>Azure</h3>
                    <p>$352,608</p>
                </div>
                <div className="costDetail">
                    <h3>GCP</h3>
                    <p>$105,863</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CostWidget;
