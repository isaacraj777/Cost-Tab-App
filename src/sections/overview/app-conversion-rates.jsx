import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { UserView } from '../user/view';

// ----------------------------------------------------------------------

export default function AppConversionRates({ title, subheader, headers, data, showDesc, ...other }) {

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 1 }}>
        <UserView headers={headers} data={data} showDesc={showDesc}/>
      </Box>
    </Card>
  );
}

AppConversionRates.propTypes = {
  headers: PropTypes.object,
  data: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
  showDesc: PropTypes.bool,
};
