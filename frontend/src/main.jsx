import './index.css'
import { CookiesProvider } from 'react-cookie';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Authentication, { Page } from './pages/Authentication.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Authentication page={Page.Login}/>,
  },
  {
    path: "/register",
    element: <Authentication page={Page.Register}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>,
)
