import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const IC_NAME = [
  'NCI',
'NIAID',
'NIDCR',
'NIDDK',
'NHLBI',
'NIMH',
'NINDS',
'NLM',
'NICHD',
'NIGMS',
'NEI',
'NIEHS',
'NIAAA',
'NIDA',
'NIA',
'NIAMS',
'NINR',
'NIDCD',
'NHGRI',
'NIBIB',
'NIMHD',
];
const IC_DESC = [

];
const PRODUCT_COLOR = [
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

export const products = [...Array(21)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    // cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: IC_NAME[index],
    cost: `$${faker.finance.amount(15, 100, 0)}0/${faker.string.fromCharacters(['Month', 'Project'])}`,
    priceSale: setIndex % 3 ? null : faker.number.int({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});
