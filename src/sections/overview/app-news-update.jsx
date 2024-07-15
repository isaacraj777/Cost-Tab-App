import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom'
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import { fToNow } from '../../utils/format-time';

import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import { Avatar, Grid, List, ListItem } from '@mui/material';
import { fCurrency } from '../../utils/format-number';

// ----------------------------------------------------------------------

export default function AppNewsUpdate({ product, ...other }) {
  return (
    <>
     {product.isStatic &&
      <Card {...other} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  p: 2}}>
          <Avatar src={product.image} sx={{ width: 80, height: 80 }}/>
          <CardHeader title={product.title} subheader={product.description} sx={{ mb: 5, textAlign: 'center' }}/>

          {/* <Scrollbar> */}
            <Stack sx={{ p: 3, pr: 0 }}>
                <List sx={{ listStyleType: 'disc' }}>
                  <ListItem sx={{ display: 'list-item' }}><Typography variant='h6'>{product.datasets[0]}</Typography></ListItem>
                  <ListItem sx={{ display: 'list-item' }}><Typography variant='h6'>{product.frameworks[0]}</Typography></ListItem>
                  <ListItem sx={{ display: 'list-item' }}><Typography variant='h6'>{product.units[0]}</Typography></ListItem>
                </List>
            </Stack>
          {/* </Scrollbar> */}

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
              {fCurrency(product.price)}
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
