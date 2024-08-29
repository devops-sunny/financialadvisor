import { Navigate, useRoutes } from 'react-router-dom';
// auth
// layouts
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
//
import {
  LoginPage,
  Page404,
  SubCategoryPage,
  CategoryPage,
  RegisterPage,
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
            { path: 'SubCategory', element: <SubCategoryPage /> },
            { path: 'Category', element: <CategoryPage /> },
          ],
        },
      ],
    },
    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
