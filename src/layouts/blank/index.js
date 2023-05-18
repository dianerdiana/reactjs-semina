import React from 'react'

// ** Third Party Component
import { Outlet } from 'react-router-dom'

const BlankLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}

export default BlankLayout
