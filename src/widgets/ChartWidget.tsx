import React, { useState, useEffect } from 'react';
import { AreaChart, IChartProps } from "@fluentui/react-charting";
import { Stack, Text, DefaultButton } from "@fluentui/react";
import { initializeIcons } from '@uifabric/icons';

initializeIcons();

// Example data for the chart
const generateChartData = () => ({
    chartTitle: "Resource Utilization",
    lineChartData: [{
        legend: "Budget",
        data: [{ x: new Date(2024, 0, 1), y: 0 }, { x: new Date(2024, 4, 1), y: 10000 }],
        color: "#6BB700"
    }, {
        legend: "Cost",
        data: [{ x: new Date(2024, 0, 1), y: 0 }, { x: new Date(2024, 4, 1), y: 5000 }],
        color: "#FFB900"
    }]
});

// ChartWidget Component
const ChartWidget: React.FC = () => {
    const [chartProps, setChartProps] = useState<IChartProps>(generateChartData());

    useEffect(() => {
        // Simulate data fetching and update chart
        const timer = setTimeout(() => {
            setChartProps(generateChartData());
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Stack tokens={{ childrenGap: 20, padding: 10 }}>
            <Text variant="large">Budget vs Cost</Text>
            <AreaChart data={chartProps} height={300} />
            <DefaultButton text="View details" iconProps={{ iconName: 'OpenInNewWindow' }} />
        </Stack>
    );
};

export default ChartWidget;
// import React from 'react';
// import { LineChart, ILineChartProps, IChartProps } from '@fluentui/react-charting';

// const lineChartData: IChartProps = {
//   chartTitle: "Budget vs Cost",
//   lineChartData: [{
//     legend: 'Budget',
//     data: [
//       { x: new Date('2021-01-01'), y: 30000 },
//       { x: new Date('2021-02-01'), y: 33000 },
//       { x: new Date('2021-03-01'), y: 29000 },
//       { x: new Date('2021-04-01'), y: 37000 },
//       { x: new Date('2021-05-01'), y: 45000 },
//     ],
//     color: '#6BB700'
//   }, {
//     legend: 'Cost',
//     data: [
//       { x: new Date('2021-01-01'), y: 25000 },
//       { x: new Date('2021-02-01'), y: 28000 },
//       { x: new Date('2021-03-01'), y: 35000 },
//       { x: new Date('2021-04-01'), y: 32000 },
//       { x: new Date('2021-05-01'), y: 42000 },
//     ],
//     color: '#FFB900'
//   }]
// };

// const ChartWidget = () => (
//   <LineChart
//     data={lineChartData}
//     height={300}
//     width={500}
//   />
// );

// export default ChartWidget;
// import React from 'react';
// import { PieChart, IPieChartProps } from '@fluentui/react-charting';
// const points = [
//     { y: 50, x: 'ABCD' },
//     { y: 25, x: 'EFGH' },
//     { y: 25, x: 'IJKL' },
//   ];
// const pieChartData =  [{
//     y : 70,
//     x: "Virtual Machines",
//     onClick: () => console.log('Clicked Virtual Machines'),
//   }, {
//     y: 20,
//     x: 'Storage',
    
//     onClick: () => console.log('Clicked Storage'),
//   }, {
//     y: 10,
//     x: 'SQL Database',
    
//     onClick: () => console.log('Clicked SQL Database'),
//   }]

// const ServiceCostPieChart = () => (
//   <PieChart
//     data={pieChartData}
//     width={400}
//     height={300}
//   />
// );

// export default ServiceCostPieChart;



