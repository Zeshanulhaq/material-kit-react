// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },

  {
    title: 'Add New User',
    path: 'user/addnew',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Client View',
    path: 'client',
    icon: getIcon('eva:person-add-fill'),
  },
];

export default navConfig;
