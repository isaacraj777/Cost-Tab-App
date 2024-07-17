import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import { grey, info, primary, success, warning } from '../../theme/palette';
import { fCurrency } from '../../utils/format-number';

// ----------------------------------------------------------------------

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];
export const GENDER_OPTIONS = ['Men', 'Women', 'Kids'];
export const CATEGORY_OPTIONS = ['All', 'Shose', 'Apparel', 'Accessories'];
export const RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const PRICE_OPTIONS = [
  { value: 'below', label: 'Below $25' },
  { value: 'between', label: 'Between $25 - $75' },
  { value: 'above', label: 'Above $75' },
];
export const COLOR_OPTIONS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

// ----------------------------------------------------------------------

export default function ProductFilters({ openFilter, onOpenFilter, onCloseFilter, product, handleSelect, index }) {

  console.log(product);

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon="ic:round-filter-list" />}
        onClick={onOpenFilter}
      >
        Choose Genomic Workspace to Deploy&nbsp;
      </Button>

      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 380, border: "none", overflow: "hidden" },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="h6" sx={{ ml: 1 }}>
            Filters
          </Typography>
          <Avatar src={product.image} sx={{ width: 60, height: 60 }}/>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
          <Stack spacing={1}>
              <Typography
                variant="subtitle2"
                sx={{ background: info.dark, p: 2, color: grey[100] }}
              >
                Research Workspace
              </Typography>
              <RadioGroup>
                {product.applications.map((app, idx) => (
                  <FormControlLabel
                    key={idx}
                    value={app}
                    control={<Radio />}
                    label={app}
                    onChange={(e) =>
                      handleSelect(index, "app", e.target.value)
                    }
                  />
                ))}
              </RadioGroup>
            </Stack>
            <Stack spacing={1}>
              <Typography
                variant="subtitle2"
                sx={{ background: warning.dark, p: 2, color: grey[100] }}
              >
                Cloud Provider
              </Typography>
              <RadioGroup>
                {product.providers.map((provider, idx) => (
                  <FormControlLabel
                    key={idx}
                    value={provider}
                    control={<Radio />}
                    label={provider}
                    onChange={(e) =>
                      handleSelect(index, "provider", e.target.value)
                    }
                  />
                ))}
              </RadioGroup>
            </Stack>

            <Stack spacing={1}>
              <Typography
                variant="subtitle2"
                sx={{ background: primary.dark, p: 2, color: grey[100] }}
              >
                Dataset
              </Typography>
              <RadioGroup>
                {product.datasets.map((dataset, idx) => (
                  <FormControlLabel
                    key={idx}
                    value={dataset}
                    control={<Radio />}
                    label={dataset}
                    onChange={(e) =>
                      handleSelect(index, "dataset", e.target.value)
                    }
                  />
                ))}
              </RadioGroup>
            </Stack>

            <Stack spacing={1}>
              <Typography
                variant="subtitle2"
                sx={{ background: info.dark, p: 2, color: grey[100] }}
              >
                Framework
              </Typography>
              <RadioGroup>
                {product.frameworks.map((framework, idx) => (
                  <FormControlLabel
                    key={idx}
                    value={framework}
                    control={<Radio />}
                    label={framework}
                    onChange={(e) =>
                      handleSelect(index, "framework", e.target.value)
                    }
                  />
                ))}
              </RadioGroup>
            </Stack>

            <Stack spacing={1}>
              <Typography
                variant="subtitle2"
                sx={{ background: success.dark, p: 2, color: grey[100] }}
              >
                Unit
              </Typography>
              <RadioGroup>
                {product.units.map((unit, idx) => (
                  <FormControlLabel
                    key={idx}
                    value={unit}
                    control={<Radio />}
                    label={unit}
                    onChange={(e) =>
                      handleSelect(index, "unit", e.target.value)
                    }
                  />
                ))}
              </RadioGroup>
            </Stack>
          </Stack>
        </Scrollbar>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}>
          <Typography
            // component="span"
            variant="h5"
            sx={{
              display: "flex",
              color: "text.disabled",
              placeSelf: "flex-end",
            }}
          >
            {fCurrency(product.price)}
          </Typography>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="outlined"
            startIcon={<Iconify icon="ic:round-clear-all" />}
            component={Link} to={product.link} target='_blank'
          >
            Deploy using chatbot
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

ProductFilters.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
  handleSelect: PropTypes.func,
  product: PropTypes.object,
  index: PropTypes.number,
};
