// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general v4.1.0',
    items: [
      { title: 'dashboard', path: "", icon: ICONS.dashboard },
    ],
  },

  
  {
    subheader: 'management',
    items: [
      {
        title: 'management',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Category', path: PATH_DASHBOARD.user.Category },
          { title: 'SubCategory', path: PATH_DASHBOARD.user.SubCategory },
          
        ],
      },
    ],
  },
];

export default navConfig;
