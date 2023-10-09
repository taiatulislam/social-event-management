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
import PrivateRoute from './routes/PrivateRoute';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Profile from './pages/profile/Profile';

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
        path: "/serviceDetails/:id",
        loader: () => fetch('/services.json'),
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/gallery",
        element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
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
