import React from 'react'
import Layout from './layouts'
import Landing from './views/Landing'
import Login from './views/Authentication/Login'

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
    path: '/login',
    element: <Layout auth={true} />,
    children: [
      {
        path: '/login',
        element: <Login />
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
