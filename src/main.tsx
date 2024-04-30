import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Dashboard, Categories, SignUp, Movies } from './pages';
import { NewsData, WeatherData } from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />
  },
  {
    path: "/category",
    element: <Categories />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: async () => {
      const weatherRes = await fetch(import.meta.env.VITE_URL);
      const weatherData: WeatherData = await weatherRes.json();

      const newsRes = await fetch(import.meta.env.VITE_NEWS_URL);
      const newsData: NewsData = await newsRes.json();

      return { weatherData, newsData };
    }
  },
  {
    path: "/movies",
    element: <Movies />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
