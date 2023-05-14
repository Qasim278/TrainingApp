import Iconify from '../../../components/iconify';

const icon = (name) => <Iconify icon={name} />;

const navConfig = [
  {
    title: 'Trainings',
    path: '/dashboard/trainings',
    icon: icon('material-symbols:model-training'),
  },
  {
    title: 'Customers',
    path: '/dashboard/customers',
    icon: icon('mdi:user-group'),
  },
 
  {
    title: 'Statistics',
    path: '/dashboard/statistics',
    icon: icon('material-symbols:bar-chart-4-bars-rounded'),
  },
  {
    title: 'Calendar',
    path: '/dashboard/calendar',
    icon: icon('material-symbols:calendar-month'),
  },
 
];

export default navConfig;
