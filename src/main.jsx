import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import AfterLogin from './components/AfterLogin';
import VehicleManagerTableView from './components/VehicleManagerTableView';
import UserTableView from './components/UserTableView';
import Footer from './components/Footer';
import Error from './components/Error';
import './index.css';
import AddButton from './components/AddButton';
import EditButton from './components/EditButton';
import CarNotification from './components/CarNotification';
import CarDetails from './components/CarDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children:[
      {
        path:'/footer',
        element:<Footer />,
      }
    ]
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/after-login",
    element: <AfterLogin />,
  },
  {
    path: "/vehicle-manager",
    element: <VehicleManagerTableView />,
  },
  {
    path: "/user-table",
    element: <UserTableView />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/add-button",
    element: <AddButton />,
  },
  {
    path: "/edit-button",
    element: <EditButton />,
  },
  {
    path: "/car-notification",
    element: <CarNotification />,
  },
  {
    path: "/car-details",
    element: <CarDetails />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

