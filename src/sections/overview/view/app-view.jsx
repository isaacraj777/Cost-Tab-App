import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';


import { products } from '../../../_mock/ic-data';
import { users } from '../../../_mock/user';
import AppConversionRates from '../app-conversion-rates';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';

// ----------------------------------------------------------------------

export default function AppView() {

  const costByServiceHeaders = [
    { id: 'service', label: 'Service'},
    { id: 'description', label: 'Description'},
    { id: 'cost', label: 'Cost'},
    { id: '' },
  ];

  const icTableHeaders = [
    { id: 'name', label: 'IC Name', width: '320px'},
    { id: 'cost', label: 'Cost', width: '240px'},
    { id: '' },
  ];

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" sx={{ mb: 5, textAlign: 'center' }}>
        Dashboard 👋
      </Typography>

      <Grid container spacing={3}>
          <Grid xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Available Budget (USD)"
              total={723315}
              color="success"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />} />
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Actual Cost MTD (USD)"
              total={714000}
              color="info"
              icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />} />
          </Grid><Grid xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Forecast Cost (USD)"
              total={852831}
              color="warning"
              icon={<img alt="icon" src="/assets/icons/glass/price-forecasting-1.png" />} />
          </Grid><Grid xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Cloud Cost By Year"
              subheader="(+43%) than last year"
              chart={{
                labels: [
                  '01/01/2013',
                  '01/01/2014',
                  '01/01/2015',
                  '01/01/2016',
                  '01/01/2017',
                  '01/01/2018',
                  '01/01/2019',
                  '01/01/2020',
                  '01/01/2021',
                  '01/01/2022',
                  '01/01/2023',
                ],
                series: [
                  {
                    name: 'GCP',
                    type: 'column',
                    fill: 'solid',
                    data: [23005, 11548, 22356, 27400, 13008, 22540, 37530, 21890, 44678, 22378, 30500],
                  },
                  {
                    name: 'AWS',
                    type: 'area',
                    fill: 'gradient',
                    data: [44300, 55400, 41456, 67894, 22345, 43000, 21600, 41855, 56000, 27400, 43400],
                  },
                  {
                    name: 'Azure',
                    type: 'line',
                    fill: 'solid',
                    data: [30500, 25530, 36120, 30500, 45185, 35678, 64420, 52000, 59129, 36000, 39150],
                  },
                ],
              }} />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Cloud Cost Overall"
              // subheader="YTD July 2024"
              chart={{
                series: [
                  { label: 'GCP', value: 277833 },
                  { label: 'AWS', value: 465650 },
                  { label: 'Azure', value: 454212 },
                  // { label: 'Africa', value: 4443 },
                ],
              }} />
          </Grid><Grid xs={12} md={6} lg={7}>
            <AppConversionRates
              title="Cost By Service Break Down"
              headers={costByServiceHeaders}
              data={users}
              showDesc />
          </Grid><Grid xs={12} md={6} lg={5}>
            <AppConversionRates
              title="ICs Cost Break Down"
              headers={icTableHeaders}
              data={products} />
          </Grid>
      </Grid>
    </Container>
  );
}
