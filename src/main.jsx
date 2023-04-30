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
import DrinkDetail from './views/DrinkDetail';


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
  },
  {
    path: "/drink",
    element: <DrinkDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />,
)
