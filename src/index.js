import React from 'react'

import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import routes from './routes/rootRoutes'

import './index.scss'
import './assets/custom.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
