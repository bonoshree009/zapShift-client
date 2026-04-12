
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Covarage from "../Pages/Covarage/Covarage";
import AboutUs from "../Pages/About/AboutUs";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/AuthPage/Register";
import Login from "../Pages/AuthPage/Login.Jsx";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home},

      {path: 'rider',
        element:<PrivateRoute><Rider></Rider></PrivateRoute>


      },
      {path:'/covarage',
        Component:Covarage ,
        loader:()=> fetch('/warehouses.json').then(res => res.json()),
        },
        {path :'/about', Component: AboutUs}
    ]
  },
  {
    path: '/',
    Component:AuthLayout,
    children:[
     { path:'register', Component:Register},
     {path:'login',Component:Login}
    ]
  }
]);