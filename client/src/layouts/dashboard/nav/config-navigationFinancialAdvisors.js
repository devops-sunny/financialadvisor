// routes
import {  PATH_FinancialAdviserDashboard } from '../../../routes/paths';
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

const FinancialAdvisors = [
 
  {
    subheader: 'general v4.1.0',
    items: [
      { title: 'dashboard', path: "", icon: ICONS.dashboard },
    ],
  },{
    subheader: 'management',
    items: [
      {
        title: 'management',
        path: PATH_FinancialAdviserDashboard.FinancialAdviserDashboard.Appointments,
        icon: ICONS.user,
        children: [
          { title: 'FinancialAdvisors', path: PATH_FinancialAdviserDashboard.FinancialAdviserDashboard.Appointments },

        ],
      },
    ],
  },
];


export default FinancialAdvisors;
