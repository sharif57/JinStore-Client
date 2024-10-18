import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import ShopDetails from './Components/Shop/ShopDetails';
import Login from './Components/Home/Login';
import Register from './Components/Home/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Blogs from './Components/Blogs/Blogs';
import Work from './Components/Home/Work';
import Beverages from './Components/Beverages/Beverages';
import Tea from './Tea/Tea';
import Water from './Water/Water';
import Juice from './Juice/Juice';
import Drinks from './Drinks/Drinks';
import Fruits from './Fruits & Vegetables/Fruits';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/shopDetails',
        element: <ShopDetails></ShopDetails>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/work',
        element: <Work></Work>
      },
      {
        path:'/beverages',
        element:<Beverages></Beverages>
      },
      {
        path:'/tea',
        element:<Tea></Tea>
      },
      {
        path:'/water',
        element:<Water></Water>
      },
      {
        path:'/juice',
        element:<Juice></Juice>
      },
      {
        path:'/drinks',
        element:<Drinks></Drinks>
      },
      {
        path:'/fruits',
        element:<Fruits></Fruits>
      }

    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
