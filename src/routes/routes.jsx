import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from '../dashboard';
import CatlogDashboard from '../dashboards/CatlogDashboard';

export const IndexPage = lazy(() => import('../pages/app'));
export const CatalogPage = lazy(() => import('../pages/catalog'))


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, path: 'tab', index: true },
        { path: 'catalog', element: <CatalogPage /> },
      ],
    },
    {
      path: '/cat',
      element: <CatlogDashboard />,
    },
  ]);

  return routes;
}
