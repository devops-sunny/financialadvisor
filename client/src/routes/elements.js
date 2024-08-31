import { Suspense, lazy } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')));
export const SubCategoryPage = Loadable(lazy(() => import('../pages/SubCategoryPage')));
export const CategoryPage = Loadable(lazy(() => import('../pages/CategoryPage')));
export const RegisterPage = Loadable(lazy(() => import('../pages/RegisterPage')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));
export const FaqPage = Loadable(lazy(() => import('../pages/FaqPage')));
export const PrivacyPage = Loadable(lazy(() => import('../pages/PrivacyPage')));
export const TermsPage = Loadable(lazy(() => import('../pages/TermsPage')));
export const UserPage = Loadable(lazy(() => import('../pages/UserPage')));
export const FinancialAdvisorsPage = Loadable(lazy(() => import('../pages/FinancialAdvisorsPage')));
export const ProductsPage = Loadable(lazy(() => import('../pages/ProductsPage')));
export const AppointmentsPage = Loadable(lazy(() => import('../pages/AppointmentsPage')));


