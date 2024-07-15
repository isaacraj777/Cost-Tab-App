import { Helmet } from 'react-helmet-async';
import { CatalogView } from '../sections/catalog/view';

// ----------------------------------------------------------------------

export default function CatalogPage() {
  return (
    <>
      <Helmet>
        <title> Catalog </title>
      </Helmet>

      <CatalogView />
    </>
  );
}
