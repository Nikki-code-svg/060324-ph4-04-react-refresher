import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Favorites from './components/Favorites.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/favorites',
    element: <Favorites />
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
