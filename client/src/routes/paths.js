// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const FinancialAdviserDashboard = "/FinancialAdviserDashboard"

// ----------------------------------------------------------------------


export const PATH_DOCS = {
  root: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
};



export const PATH_AUTH = {
  login: '/login',
  register:"/register"
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
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




 export const PATH_ZONE_ON_STORE = 'https://mui.com/store/items/zone-landing-page/';

export const PATH_MINIMAL_ON_STORE = 'https://mui.com/store/items/minimal-dashboard/';

export const PATH_FREE_VERSION = 'https://mui.com/store/items/minimal-dashboard-free/';

export const PATH_FIGMA_PREVIEW =
  'https://www.figma.com/file/rWMDOkMZYw2VpTdNuBBCvN/%5BPreview%5D-Minimal-Web.26.11.22?node-id=0%3A1&t=ya2mDFiuhTXXLLF1-1';
