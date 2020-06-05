import React, { ReactElement } from 'react';

import { Outlet, useRoutes, Navigate } from 'react-router-dom';

import { routes, mockAuthed } from '../config';

const Home = (): ReactElement => <div>Home</div>;
const Login = (): ReactElement => <div>Login</div>;

/** Check for auth */
const ProtectedPage = (): ReactElement => {
  if (!mockAuthed) {
    return <Navigate to={routes.login} />;
  }

  return <Outlet />;
};

/** If authed, send to home */
const AuthPage = (): ReactElement => {
  if (mockAuthed) {
    return <Navigate to={routes.home} />;
  }

  return <Outlet />;
};

const AppRouter: React.FC = () => {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    {
      path: 'login',
      element: <AuthPage />,
      children: [{ path: '/', element: <Login /> }],
    },
    {
      path: 'users',
      element: <ProtectedPage />,
      children: [
        { path: '/', element: <div>Protected Page</div> },
        { path: ':id', element: <div>Protected User Profile</div> },
        { path: 'me', element: <div>Protected Profile</div> },
      ],
    },
    { path: '*', element: <div>404</div> },
  ]);

  return element;
};

export default AppRouter;
