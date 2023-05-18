import React from 'react'

// ** Layout
import HorizontalLayout from 'layouts/user'
import BlankLayout from 'layouts/blank'

// Routes
import UserRoutes from './user'

const Routes = [...UserRoutes]

const getLayout = {
  horizontal: <HorizontalLayout />,
  blank: <BlankLayout />
}

const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = []

  if (Routes) {
    Routes.forEach((route) => {
      if (
        (route.layout && route.layout === layout) ||
        (route.layout === undefined && layout === defaultLayout)
      ) {
        LayoutRoutes.push({
          path: route.path,
          element: route.element
        })
      }
    })

    return LayoutRoutes
  }

  return LayoutRoutes
}

const getAllRoutes = () => {
  const defaultLayout = 'horizontal'
  const layouts = ['horizontal', 'blank']

  const AllRoutes = []

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout)

    AllRoutes.push({
      path: '/',
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes
    })
  })
  return AllRoutes
}

const allRoutes = getAllRoutes()

export default allRoutes
