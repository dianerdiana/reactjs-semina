// ** React Import
import React from 'react'

// ** Views
import Layout from './layouts'
import Home from './views/user/home'
import Login from './views/user/authentication/Login'
import Register from './views/user/authentication/Register'
import Checkout from './views/user/browse/checkout'

import { Navigate, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        index: true,
        element: <Home />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
  {
    path: '/browse',
    element: <div>browse</div>
  },
  {
    path: '/stories',
    element: <div>stories</div>
  },
  {
    path: '/about',
    element: <div>about</div>
  }
])

export default router
