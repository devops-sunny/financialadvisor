import { Navigate, useRoutes } from 'react-router-dom';
// auth

// layouts
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
import MainLayout from '../layouts/main/MainLayout';

import {
  LoginPage,
  Page404,
  SubCategoryPage,
  CategoryPage,
  RegisterPage,
  FaqPage ,
  PrivacyPage,
  TermsPage,
  UserPage,
  FinancialAdvisorsPage,
  ProductsPage,
  AppointmentsPage,
  AppointmentsFinancialAdviserPage,
  FaqsPage,
  Contact,
  AboutPage,
  HomePage,
  GeneralAppPage
} from './elements';
import PublicRoutes from '../Routing/PublicRoutes';
import RoleBasedRoute from '../Routing/RoleBasedRoute';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        {
          path: 'login',
          element: (
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          ),
        },
        {
          path: 'register',
          element: (
            <PublicRoutes>
              <RegisterPage />
            </PublicRoutes>
          ),
        },
      ],
    },
    {
      path: '/dashboard',
      element: (
        <RoleBasedRoute roles={["Admin"]} >
          <DashboardLayout />
        </RoleBasedRoute>
      ),
      children: [
       
        {
          path: 'user',
          children: [
            {
              element: <Navigate to="/dashboard/user/SubCategory" replace />,
              index: true,
            },
            { path: 'app', element: <GeneralAppPage /> },
            { path: 'SubCategory', element: <SubCategoryPage /> },
            { path: 'Category', element: <CategoryPage /> },
            { path: 'Faq', element: <FaqPage /> },
            { path: 'Privacy', element: <PrivacyPage /> },
            { path: 'Terms', element: <TermsPage /> },
            { path: 'User', element: <UserPage /> },
            { path: 'FinancialAdvisors', element: <FinancialAdvisorsPage /> },
            { path: 'Products', element: <ProductsPage /> },
            { path: 'Appointments', element: <AppointmentsPage /> }
          ],
        },
      ],
    },
    {
      path: '/FinancialAdviserDashboard',
      element: (
        <RoleBasedRoute roles={["FinancialAdviser"]} >
          <DashboardLayout />
        </RoleBasedRoute>
      ),
      children: [
       
        {
          path: 'FinancialAdviser',
          children: [
            {
              element: <Navigate to="/FinancialAdviserDashboard/FinancialAdviser/Appointments" replace />,
              index: true,
            },
            { path: 'Appointments', element: <AppointmentsFinancialAdviserPage /> }
          ],
        },
      ],
    },


  
      // Main Routes
      {
        element: <MainLayout />,
        children: [
          { element: <HomePage />, index: true },
          { path: 'about-us', element: <AboutPage /> },
          { path: 'contact-us', element: <Contact /> },
          { path: 'faqs', element: <FaqsPage /> },
        ],
      },

    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
