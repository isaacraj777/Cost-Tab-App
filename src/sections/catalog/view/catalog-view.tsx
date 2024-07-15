import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { Stack } from '@mui/material';
import AppNewsUpdate from '../../overview/app-news-update';
import ProductFilters from '../product-filters';

// ----------------------------------------------------------------------

export default function CatalogView() {

  const botId = '7836d570-f336-40b1-8430-234a3a2df463'; // Replace with your actual Bot ID
  const azureImage = 'assets/images/avatars/azure_logo.png';
  const awsImage = 'assets/images/avatars/amazon_icon.png';
  const gcpImage = 'assets/images/avatars/gcp_icon.png';

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

  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState<Product[]>(initialProducts);


  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

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
  console.log(index, type, value);
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
    console.log(JSON.stringify(message));
    const encodedMessage = encodeURIComponent(JSON.stringify(message));
    newProducts[index].link = `https://teams.microsoft.com/l/chat/0/0?users=28:7836d570-f336-40b1-8430-234a3a2df463&message=${encodedMessage}`;

    setProducts(newProducts);
};

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" sx={{ mb: 5, textAlign: 'center' }}>
        Catalog 👋
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
        {products.map((product, index) => 
         !product.isStatic && (
         <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            product={product}
            handleSelect={handleSelectionChange}
            index={index}
          />
        ))}

          {/* <ProductSort /> */}
        </Stack>
      </Stack>

      <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid xs={12} md={6} lg={4} key={index}>
            <AppNewsUpdate
              product={product}
            />
          </Grid>
      ))}
      </Grid>
    </Container>
  );
}

CatalogView.propTypes = { 
  isDashboard: PropTypes.bool,
};
