import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/root/Root';
import ErrorPage from './pages/errorpage/ErrorPage';
import Home from './pages/Home/Home';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import AuthProvider from './providers/AuthProvider';
import ServiceDetails from './pages/serviceDetails/ServiceDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/:id",
        loader: () => fetch('/services.json'),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
