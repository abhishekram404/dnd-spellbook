import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Providers from '@providers/Providers.tsx'
import { routes } from './routes.tsx'

axios.defaults.baseURL = 'https://www.dnd5eapi.co/api'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>,
)
