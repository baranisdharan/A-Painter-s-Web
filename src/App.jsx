import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import WorksItem from './pages/WorksItem';
import About from './pages/About';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/works',
    element: <Works />,
  },
  {
    path: '/works/:id',
    element: <WorksItem />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default function App() {
  return (
    <main>      
      <RouterProvider router={router} />
    </main>
  );
}
