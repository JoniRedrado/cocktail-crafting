import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import App from './App.jsx'
import Home from './views/Home'
import Categories from './views/Categories'
import Search from './views/Search' 
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/categories",
    element: <Categories />
  },
  {
    path: "/search",
    element: <Search />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
