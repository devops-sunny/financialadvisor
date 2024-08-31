// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const FinancialAdviserDashboard = "/FinancialAdviserDashboard"

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
  register:"/register"
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    Category: path(ROOTS_DASHBOARD, '/user/Category'),
    SubCategory: path(ROOTS_DASHBOARD, '/user/SubCategory'),
    Faq: path(ROOTS_DASHBOARD, '/user/Faq'),
    Privacy: path(ROOTS_DASHBOARD, '/user/Privacy'),
    Terms: path(ROOTS_DASHBOARD, '/user/Terms'),
    User: path(ROOTS_DASHBOARD, '/user/User'),
    FinancialAdvisors: path(ROOTS_DASHBOARD, '/user/FinancialAdvisors'),
    Products: path(ROOTS_DASHBOARD, '/user/Products'),
    Appointments: path(ROOTS_DASHBOARD, '/user/Appointments'),
  },
 };


 export const PATH_FinancialAdviserDashboard = {
  root: FinancialAdviserDashboard,
  FinancialAdviserDashboard: {
    Appointments:path(FinancialAdviserDashboard, '/FinancialAdviser/Appointments'),
  },
 };


