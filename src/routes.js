import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import CustomerPage from './pages/CustomerPage';
import Trainings from './pages/Trainings';
import Calendar from './pages/Calendar';
import Statistics from './pages/Statistics';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/customers" />, index: true },
        { path: 'customers', element: <CustomerPage /> },
        { path: 'trainings', element: <Trainings /> },
        { path: 'statistics', element: <Statistics /> },
        { path: 'calendar', element: <Calendar /> },
      

      ],
    },

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/customers" />, index: true },
        // { path: '404', element: <Page404 /> },
        // { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <CustomerPage />,
    },
  ]);

  return routes;
}
