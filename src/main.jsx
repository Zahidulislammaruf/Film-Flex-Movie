import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import ErrorPage from './Component/SinglePage/ErrorPage.jsx';
import Home from './Component/SinglePage/Home.jsx';
import Login from './Component/SinglePage/Login';
import Singup from './Component/SinglePage/Singup';
import AuthProvider from './provider/AuthProvider';
import AddToCart from './Component/SinglePage/AddToCart';
import MyCart from './Component/SinglePage/MyCart';
import PrivateRoute from './routes/PrivateRoute';
import BrandCategory from './Component/SinglePage/BrandCategory';
import FullDetails from './DetailsPage/FullDetails';
import UpdateCard from './Component/SinglePage/UpdateCard';
import Contact from './Component/SinglePage/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        
      },
      {
        path : '/login',
        element : <Login></Login>

      },
      {
        path : '/singup',
        element : <Singup></Singup>
      },
      {
        path : '/addtocart',
        element : <PrivateRoute><AddToCart></AddToCart></PrivateRoute>
      },
      {
        path : '/mycart',
        element : <PrivateRoute><MyCart/></PrivateRoute>,
        loader : ()=> fetch('https://flim-flex-5nf5oy2nf-zahidul-islams-projects.vercel.app/useradd')
      },
      {
        path : '/category/:category',
        element : <BrandCategory/>,
        loader : ({params}) => fetch(`https://flim-flex-5nf5oy2nf-zahidul-islams-projects.vercel.app/film/${params.category}`)
      },
      {
        path : '/view/:_id',
        element : <PrivateRoute><FullDetails></FullDetails></PrivateRoute>,
        loader : ({params}) => fetch(`https://flim-flex-5nf5oy2nf-zahidul-islams-projects.vercel.app/film/card/${params._id}`)
      },
      {
        path : '/updatecard/:_id',
        element: <PrivateRoute><UpdateCard></UpdateCard></PrivateRoute>,
        loader : ({params}) => fetch(`https://flim-flex-5nf5oy2nf-zahidul-islams-projects.vercel.app/film/card/${params._id}`)
      },
      {
        path : '/contactus',
        element : <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />

</AuthProvider>


  </React.StrictMode>,
)
