import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminHomepage from './admins/homepage.tsx';
import UserHomepage from './users/homepage.tsx';
import AuthHomepage from './auth/authHomepage.tsx';
import LoginHomepage from './auth/loginHomepage.tsx';
import Homepage from './homepage.tsx';

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminHomepage />,
  },
  {
    path: "/user",
    element: <UserHomepage />,
  },
  {
    path: "/auth",
    element: <AuthHomepage />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <LoginHomepage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as any);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

