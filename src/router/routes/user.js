import React from 'react'

// ** Views
import Home from 'views/user/home'
import Login from 'views/user/authentication/Login'
import Register from 'views/user/authentication/Register'
import BrowseCheckout from 'views/user/browse/checkout'
import BrowseDetails from 'views/user/browse/details'

const routes = [
  {
    path: '/login',
    element: <Login />,
    layout: 'horizontal'
  },
  {
    path: '/register',
    element: <Register />,
    layout: 'horizontal'
  },
  {
    path: '/home',
    element: <Home />,
    layout: 'horizontal'
  },
  {
    path: '/browse/checkout/:id',
    element: <BrowseCheckout />,
    layout: 'horizontal'
  },
  {
    path: '/browse/details/:id',
    element: <BrowseDetails />,
    layout: 'horizontal'
  }
]

export default routes
