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
import WaterDetails from './Water/WaterDetails';
import JuiceDetails from './Juice/JuiceDetails';
import DrinksDetails from './Drinks/DrinksDetails';
import TeaDetails from './Tea/TeaDetails';
import ShopDetails from './Components/Shop/ShopDetails';

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
        path: '/shopDetails/:id',
        element: <ShopDetails></ShopDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/shop/${params.id}`)
      },
     
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/work',
        element: <Work></Work>
      },
      {
        path: '/beverages',
        element: <Beverages></Beverages>
      },
      {
        path: '/tea',
        element: <Tea></Tea>,
      },
      {
        path: '/teaDetails/:id',
        element: <TeaDetails></TeaDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/tea/${params.id}`)
      },
      {
        path: '/water',
        element: <Water></Water>
      },
      {
        path: '/waterDetails/:id',
        element: <WaterDetails></WaterDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/water/${params.id}`)
      },
      {
        path: '/juice',
        element: <Juice></Juice>,
      },
      {
        path: '/juiceDetails/:id',
        element: <JuiceDetails></JuiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/juice/${params.id}`)
      },
      {
        path: '/drinks',
        element: <Drinks></Drinks>
      },
      {
        path: '/drinksDetails/:id',
        element: <DrinksDetails></DrinksDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/drinks/${params.id}`)
      },
      {
        path: '/fruits',
        element: <Fruits></Fruits>
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
