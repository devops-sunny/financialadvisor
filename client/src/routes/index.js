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
  PageFive,
  PageFour,
  PageOne,
  PageSix,
  PageThree,
  PageTwo,
  RegisterPage,
} from './elements';
import PublicRoutes from '../Routing/PublicRoutes';
import RoleBasedRoute from '../Routing/RoleBasedRoute';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
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
       
        { path: 'one', element: <PageOne />},
        { path: 'two', element: <PageTwo /> },
        { path: 'three', element: <PageThree /> },
        {
          path: 'user',
          children: [
            {
              element: <Navigate to="/dashboard/user/four" replace />,
              index: true,
            },
            { path: 'four', element: <PageFour /> },
            { path: 'five', element: <PageFive /> },
            { path: 'six', element: <PageSix /> },
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
