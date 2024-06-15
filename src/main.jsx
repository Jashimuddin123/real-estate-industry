import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider';
import Root from './Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ViewProperty from './Components/ViewProperty/ViewProperty';
import PrivateRoute from './Components/PrivetRoute/PrivateRoute';
import NotFound from './NotFound/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('./data.json').then(res => res.json()),
      },
      {
        path: '/property/:id',
        element: (
          <PrivateRoute>
            <ViewProperty />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(`/data.json/${params.id}`);
          return response.json();
        },
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
