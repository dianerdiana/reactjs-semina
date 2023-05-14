// ** React Import
import React from 'react'

// ** Custom Component
import Layout from './layouts'
import Landing from './views/Landing'
import Login from './views/Authentication/Login'
import Register from './views/Authentication/Register'
import Checkout from './views/Checkout'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Landing />
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
