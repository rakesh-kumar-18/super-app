import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Home, Movies, SignUp } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />
  },
  {
    path: "/category",
    element: <Movies />
  },
  {
    path: "/home",
    element: <Home />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
