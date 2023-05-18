// ** React Import
import React, { Suspense } from 'react'

// ** Router
import Router from 'router/Router'

// ** All Routes
import allRoutes from 'router/routes'

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router allRoutes={allRoutes} />
    </Suspense>
  )
}

export default App
