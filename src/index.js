import React, { lazy, Suspense } from 'react'

// ** Router
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// ** RB
import { Spinner } from 'react-bootstrap'

// ** Style
import 'assets/scss/index.scss'
import reportWebVitals from './reportWebVitals'

// ** Lazy App
const LazyApp = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Spinner variant="success" animation="border" />}>
        <LazyApp />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
