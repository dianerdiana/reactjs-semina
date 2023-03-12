// ** React Import
import React from 'react'

// ** Custom Component
import Layout from './layouts'
import Landing from './views/Landing'
import Login from './views/Authentication/Login'
import Register from './views/Authentication/Register'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Landing />
      }
    ]
  },
  {
    element: <Layout auth={true} />,
    children: [
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
