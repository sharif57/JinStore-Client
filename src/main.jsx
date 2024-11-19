import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
import MyCart from './Components/Cart/MyCart';
import Trending from './Trending/Trending';
import FruitsDetails from './Fruits & Vegetables/FruitsDetails';
import MyLocationMap from './Components/Home/MyLocationMap';
import Payment from './Components/CheckOut/Payment';
import { CartProvider } from './Components/CheckOut/CartContext';
import WishCard from './Components/Cart/WishCard';
import Contact from './Components/Home/Contact';
import PrivateRoutes from './AuthProvider/PrivateRoutes';

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
        path: '/map',
        element: <MyLocationMap></MyLocationMap>
      },
      {
        path: '/shopDetails/:id',
        element: <PrivateRoutes><ShopDetails></ShopDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://jinstore-server.vercel.app/shop/${params.id}`)
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
        element:<PrivateRoutes> <TeaDetails></TeaDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://jinstore-server.vercel.app/tea/${params.id}`)
      },
      {
        path: '/water',
        element: <Water></Water>
      },
      {
        path: '/waterDetails/:id',
        element: <PrivateRoutes><WaterDetails></WaterDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://jinstore-server.vercel.app/water/${params.id}`)
      },
      {
        path: '/juice',
        element: <Juice></Juice>,
      },
      {
        path: '/juiceDetails/:id',
        element: <PrivateRoutes><JuiceDetails></JuiceDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://jinstore-server.vercel.app/juice/${params.id}`)
      },
      {
        path: '/drinks',
        element: <Drinks></Drinks>
      },
      {
        path: '/drinksDetails/:id',
        element: <PrivateRoutes><DrinksDetails></DrinksDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://jinstore-server.vercel.app/drinks/${params.id}`)
      },
      {
        path: '/fruits',
        element: <Fruits></Fruits>
      },
      {
        path: '/fruitsDetails/:id',
        element: <PrivateRoutes><FruitsDetails></FruitsDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://jinstore-server.vercel.app/fruits/${params.id}`)
      },
      {
        path: '/myCart',
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
      },
      {
        path: 'blogs/topSelling',
        element: <Trending></Trending>
      }, {
        path: '/checkOut',
        element: <Payment></Payment>
      },
      {
        path:'/wish',
        element:<PrivateRoutes><WishCard></WishCard></PrivateRoutes>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
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
const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
