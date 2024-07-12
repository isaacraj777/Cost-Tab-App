import React, { useState, useEffect } from 'react';

import '../styles/OptimizationHelp.css';
import awsImage from '../images/aws.png';
import azureImage from '../images/azure.png';
import gcpImage from '../images/gcp.png';
const botId = '7836d570-f336-40b1-8430-234a3a2df463'; // Replace with your actual Bot ID

interface Product {
    title: string;
    description: string;
    image: string;
    link: string;
    datasets: string[];
    frameworks: string[];
    units: string[];
    basePrice: number;
    isStatic: boolean;
    dataset?: string;
    framework?: string;
    cloud?:string[];
    unit?: string;
    price: number;
    providers: string[];
    provider?: string;


}

const initialProducts: Product[] = [
   
    {
        title: 'AWS Genomic Service',
        description: 'Apply advanced coding and language models to a variety of use cases on Genomics.',
        image: awsImage,
        link: '',
        datasets: ['Genomics dataset', 'Inner Eye dataset', 'Infant Birth Assessment dataset'],
        frameworks: ['PyTorch', 'TensorFlow', 'Keras'],
        providers: ['Azure', 'AWS', 'GCP'],

        units: ['GPU', 'CPU'],
        basePrice: 150,
        isStatic: true,
        price: 100

    },
  
    {
        title: 'Azure Genomic Service',
        description: 'Apply advanced coding and language models to a variety of use cases on Genomics',
        image : azureImage,
        link: '',
        datasets: ['Genomics dataset', 'Inner Eye dataset', 'Infant Birth Assessment dataset'],
        frameworks: ['PyTorch', 'TensorFlow', 'Keras'],
        units: ['GPU', 'CPU'],
        providers: ['Azure', 'AWS', 'GCP'],
        basePrice: 150,
        isStatic: true,
        price: 100


    },
    {
        title: 'GCP Genomics Service',
        description: 'Apply advanced coding and language models to a variety of use cases on Genomics',
        link: 'https://teams.microsoft.com/l/chat/0/0?users=28:7836d570-f336-40b1-8430-234a3a2df463&message=%7B%22userId%22%3A%20%2212345%22%2C%20%22query%22%3A%20%22data%20request%22%7D',
        image : gcpImage,
        datasets: ['Genomics dataset', 'Inner Eye dataset', 'Infant Birth Assessment dataset'],
        frameworks: ['PyTorch', 'TensorFlow', 'Keras'],
        providers: ['Azure', 'AWS', 'GCP'],

        units: ['GPU', 'CPU'],
        basePrice: 150,
        isStatic: true,
        price: 100


    },
    {
        title: 'Choose Research Service to Deploy ',
        description: 'Apply advanced coding and language models to a variety of use cases on Genomics',
        image :azureImage,
        link: '',
        datasets: ['Genomics dataset', 'Inner Eye dataset', 'Infant Birth Assessment dataset'],
        frameworks: ['PyTorch', 'TensorFlow', 'Keras'],
        providers: ['Azure', 'AWS', 'GCP'],

        units: ['GPU', 'CPU'],
        cloud : ['Azure' ,'AWS' ,'GCP'],
        basePrice: 150,
        isStatic: false,
        price: 100
    },
    // Add other products similarly...
];


const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    useEffect(() => {
        const updatedProducts = products.map(product => {
            if (product.isStatic) {
                const message = {
                    title: product.title,
                    dataset: product.datasets[0],
                    framework: product.frameworks[0],
                    unit: product.units[0],
                    provider: product.providers[0],
                    price: product.price
                };
                const encodedMessage = encodeURIComponent(JSON.stringify(message));
                product.link = `https://teams.microsoft.com/l/chat/0/0?users=28:${botId}&message=${encodedMessage}`;
            }
            return product;
        });
        setProducts(updatedProducts);
    }, []);
    const handleSelectionChange = (index: number, type: 'dataset' | 'framework' | 'unit' | 'provider', value: string) => {
        const newProducts = [...products];
        newProducts[index][type] = value;
        newProducts[index].price = newProducts[index].basePrice; // Reset to base price

        // Update the price based on selection
        if (value === 'TensorFlow' || value === 'Inner Eye dataset') {
            newProducts[index].price += 50;
        } else if (value === 'CPU') {
            newProducts[index].price -= 20;
        }

        // Update the image based on the provider
        if (type === 'provider') {
            if (value === 'Azure') {
                newProducts[index].image = azureImage;
            } else if (value === 'AWS') {
                newProducts[index].image = awsImage;
            }
            else if (value === 'GCP') {
                newProducts[index].image = gcpImage;
            }
            // Add more conditions if you have more provider images
        }

        // Create the dynamic link with the encoded message
        const message = {
            title: newProducts[index].title,
            dataset: newProducts[index].dataset,
            framework: newProducts[index].framework,
            unit: newProducts[index].unit,
            provider: newProducts[index].provider,
            price: newProducts[index].price
        };
        const encodedMessage = encodeURIComponent(JSON.stringify(message));
        newProducts[index].link = `https://teams.microsoft.com/l/chat/0/0?users=28:7836d570-f336-40b1-8430-234a3a2df463&message=${encodedMessage}`;

        setProducts(newProducts);
    };

    return (
        <div className="catalogDashboard">
            <div className="header">
                <h1>Catalog Dashboard</h1>
                <p>Your modern dashboard for managing and exploring products</p>
            </div>
            <div className="productCardsContainer">
                {products.map((product, index) => (
                    <div key={index} className="productCard">
                        <img src={product.image} alt={product.title} className="productImage" />
                        <div className="productCardContent">
                            <div className="productInfo">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                {product.isStatic ? (
                                    <ul>
                                        <li>{product.datasets[0]}</li>
                                        <li>{product.frameworks[0]}</li>
                                        <li>{product.units[0]}</li>
                                    </ul>
                                ) : (
                                    <>
                                        <div className="dropdownContainer">
                                            <label>Cloud Provider: </label>
                                            <select
                                                className="customDropdown"
                                                value={product.provider}
                                                onChange={(e) => handleSelectionChange(index, 'provider', e.target.value)}
                                            >
                                                {product.providers.map((provider, idx) => (
                                                    <option key={idx} value={provider}>{provider}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="dropdownContainer">
                                            <label>Dataset: </label>
                                            <select
                                                className="customDropdown"
                                                value={product.dataset}
                                                onChange={(e) => handleSelectionChange(index, 'dataset', e.target.value)}
                                            >
                                                {product.datasets.map((dataset, idx) => (
                                                    <option key={idx} value={dataset}>{dataset}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="dropdownContainer">
                                            <label>Framework: </label>
                                            <select
                                                className="customDropdown"
                                                value={product.framework}
                                                onChange={(e) => handleSelectionChange(index, 'framework', e.target.value)}
                                            >
                                                {product.frameworks.map((framework, idx) => (
                                                    <option key={idx} value={framework}>{framework}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="dropdownContainer">
                                            <label>Unit: </label>
                                            <select
                                                className="customDropdown"
                                                value={product.unit}
                                                onChange={(e) => handleSelectionChange(index, 'unit', e.target.value)}
                                            >
                                                {product.units.map((unit, idx) => (
                                                    <option key={idx} value={unit}>{unit}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="productPrice">${product.price}</div>
                            <a href={product.link} target="_blank" rel="noopener noreferrer" className="productLink">Deploy using chatbot</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCards;

// import React from 'react';
// import '../styles/OptimizationHelp.css';
// import awsImage from '../images/aws.png';
// import azureImage from '../images/azure.png';
// import gcpImage from '../images/gcp.png';
// //https://teams.microsoft.com/l/chat/0/0?users=28:7836d570-f336-40b1-8430-234a3a2df463&message=%7B%22userId%22%3A%20%2212345%22%2C%20%22query%22%3A%20%22data%20request%22%7D
// const products = [
//     {
//         title: 'AWS Genomic Service',
//         description: 'Apply advanced coding and language models to a variety of use cases on Genomics',
//         image :awsImage,
//         link: 'https://teams.microsoft.com/l/chat/0/0?users=28:7836d570-f336-40b1-8430-234a3a2df463&message=%7B%22userId%22%3A%20%2212345%22%2C%20%22query%22%3A%20%22data%20request%22%7D',
//         items: ['Genomics dataset', 'PyTorch', 'GPU'],
//         price: '$150'


//     },
//     {
//         title: 'Azure Genomic Service',
//         description: 'Apply advanced coding and language models to a variety of use cases on Genomics',
//         image : azureImage,
//         link: 'https://teams.microsoft.com/l/chat/0/0?users=28:7836d570-f336-40b1-8430-234a3a2df463&message=%7B%22userId%22%3A%20%2212345%22%2C%20%22query%22%3A%20%22data%20request%22%7D',
//         items: ['Genomics dataset', 'PyTorch', 'GPU'],
//         price: '$250'


//     },
//     {
//         title: 'GCP Genomics Service',
//         description: 'Apply advanced coding and language models to a variety of use cases on Genomics',
//         link: 'https://teams.microsoft.com/l/chat/0/0?users=28:7836d570-f336-40b1-8430-234a3a2df463&message=%7B%22userId%22%3A%20%2212345%22%2C%20%22query%22%3A%20%22data%20request%22%7D',
//         image : gcpImage,
//         items: ['Genomics dataset', 'PyTorch', 'GPU'],
//         price: '$350'


//     },
    
// ];
// const handleContactUsClick = () => {
//     // Add your deep link or contact logic here
//     window.open('https://teams.microsoft.com/l/chat/0/0?users=28:your-bot-id', '_blank');
// };

// const OptimizationHelp: React.FC = () => {
//     return (
//         <div className="catalogDashboard">
//             <div className="header">
//                 <h1>Catalog Dashboard</h1>
//                 <p>Your modern dashboard for managing and exploring products</p>
//             </div>
//             <div className="productCardsContainer">
//                 {products.map((product, index) => (
//                     <div key={index} className="productCard">
//                         <img src={product.image} alt={product.title} className="productImage" />
//                         <div className="productCardContent">
//                             <div className="productInfo">
//                                 <h3>{product.title}</h3>
//                                 <p>{product.description}</p>
//                                 <ul>
//                                     {product.items.map((item, idx) => (
//                                         <li key={idx}>{item}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                             <div className="productPriceAndLink">
//                                 <div className="productPrice">{product.price}</div>
//                             </div>
//                             <a href={product.link} target="_blank" rel="noopener noreferrer" className="productLink">Deploy using chatbot</a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
//     // return (
//     //     <div className="catalogDashboard">
//     //         <div className="header">
//     //             <h1>Catalog Dashboard</h1>
//     //             <p>Your modern dashboard for managing and exploring products</p>
//     //         </div>
//     //         <div className="productCardsContainer">
//     //             {products.map((product, index) => (
//     //                 <div key={index} className="productCard">
//     //                     <img src={product.image} alt={product.title} className="productImage" />
//     //                     <h3>{product.title}</h3>
//     //                     <p>{product.description}</p>
//     //                     <ul>
//     //                         {product.items.map((item, idx) => (
//     //                             <li key={idx}>{item}</li>
//     //                         ))}
//     //                     </ul>
//     //                     <a href={product.link} target="_blank" rel="noopener noreferrer">Deploy using chatbot</a>
//     //                 </div>
//     //             ))}
//     //         </div>
//     //     </div>
//     // );
// };

// export default OptimizationHelp;
