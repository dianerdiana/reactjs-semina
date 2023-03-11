import React from 'react'
import Layout from './layouts'
import Landing from './views/Landing'

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
    path: '/browse',
    element: <div>Browse</div>
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
