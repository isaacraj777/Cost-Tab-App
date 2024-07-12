
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
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashhboard 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Available Budget (USD)"
            total={723315}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Actual Cost MTD (USD)"
            total={714000}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Forecast Cost (USD)"
            total={852831}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/price-forecasting-1.png" />}
          />
        </Grid>

        {/* <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={8}>
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
            }}
          />
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
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          <AppConversionRates
            title="Cost By Service Break Down"
            headers={costByServiceHeaders}
            data={users}
            showDesc
            // subheader="(+43%) than last year"
          />
        </Grid>
        <Grid xs={12} md={6} lg={5}>
          <AppConversionRates
            title="ICs Cost Break Down"
            headers={icTableHeaders}
            data={products}
            // subheader="(+43%) than last year"
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}
