import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';


import { Avatar } from '@mui/material';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import { grey } from '../../theme/palette';
import { fCurrency } from '../../utils/format-number';

// ----------------------------------------------------------------------

export default function AppNewsUpdate({ product, ...other }) {
  return (
    <>
     {product.isStatic &&
      <Card {...other} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  p: 2, height: '100%'}}>
          <Avatar src={product.image} sx={{ width: 80, height: 80 }}/>
          <CardHeader title={product.title} subheader={product.description} sx={{ mb: 5, textAlign: 'center' }}/>

          <Scrollbar sx={{maxHeight: '30vh'}}>
            <Stack sx={{ p:1 }} display={"flex"} justifyContent={"space-between"} textAlign={"center"} gap={2} flexDirection={"row"}>
              {/* <Card sx={{display: 'flex', flexDirection: 'column',  justifyContent: 'center', gap: 2, p: 1, background: grey[300], width: '100%'}}> */}
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                <Typography variant='h5'>Compute</Typography>
                  {/* <List sx={{ listStyleType: 'disc' }}> */}
                    {/* <ListItem sx={{ display: 'list-item' }}> */}
                    <Box sx={{display: 'grid', gap: 2}}>
                      {product.compute.map((item) => (
                        <Typography variant='caption' bgcolor={grey[200]} sx={{p:1}}>{item}</Typography>
                      ))}
                    </Box>
                    {/* </ListItem> */}
                    {/* <ListItem sx={{ display: 'list-item' }}> */}
                    {/* </ListItem> */}
                  {/* </List> */}
              </Box>
              <Divider orientation="vertical" />
              {/* </Card> */}
              {/* <Card sx={{display: 'flex', flexDirection: 'column',  justifyContent: 'center', gap: 2, p: 1, background: grey[300], width: '100%'}}> */}
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                <Typography variant='h5'>Software</Typography>
                <Box sx={{display: 'grid', gap: 2}}>
                      {product.frameworks.map((item) => (
                          <Typography variant='caption' bgcolor={grey[200]} sx={{p:1}}>{item}</Typography>
                      ))}
                    </Box>
              </Box>
              <Divider orientation="vertical" />
              {/* </Card> */}
              {/* <Card sx={{display: 'flex', flexDirection: 'column',  justifyContent: 'center', gap: 2, p: 1, background: grey[300], width: '100%'}}> */}
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                <Typography variant='h5'>Dataset</Typography>
                <Box sx={{display: 'grid', gap: 2}}>
                      {product.datasets.map((item) => (
                          <Typography variant='caption' bgcolor={grey[200]} sx={{p:1}}>{item}</Typography>
                      ))}
                    </Box>
              </Box>
              {/* </Card> */}
            </Stack>
          </Scrollbar>

          {/* <Typography variant="subtitle1"> */}
            <Typography
              // component="span"
              variant="h5"
              sx={{
                display: 'flex',
                color: 'text.disabled',
                placeSelf: 'flex-end'
              }}
            >
              {fCurrency(product.price)}/Day
            </Typography>
          {/* </Typography> */}

          <Divider sx={{ borderStyle: 'solid' }} />

          <Box sx={{ p: 2, textAlign: 'right' }}>
            <Button
              size="small"
              color="inherit"
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              component={RouterLink} to={product.link} target='_blank'
            >
              Deploy using chatbot
            </Button>
          </Box>
        </Card>}
      </>
  );
}

AppNewsUpdate.propTypes = {
  product: PropTypes.object,
};
