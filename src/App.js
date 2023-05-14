// ** React Import
import React from 'react'

// ** Custom Component
import Layout from './layouts'
import Home from './views/home'
import Login from './views/authentication/Login'
import Register from './views/authentication/Register'
import Checkout from './views/browse/checkout'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
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
    path: '/stories',
    element: <div>stories</div>
  },
  {
    path: '/about',
    element: <div>about</div>
  }
])

export default router
