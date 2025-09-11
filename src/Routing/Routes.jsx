import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HandHeldPage from "../pages/HandHeldPage";
import DFMDPage from "../pages/DFMDPage ";
import ShoePage from "../pages/ShoePage";
import Cart from "../pages/Cart";
import AboutUs from "../pages/AboutUs";


// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
  path: "/handheld",
  element: <HandHeldPage />,
},
{
  path: "/dfmd",
  element: <DFMDPage />,
},
{
  path:"/shoepage",
  element: <ShoePage/>
},
{
  path:'/cart',
  element: <Cart/>
},
{
  path:'/aboutus',
  element: <AboutUs/>
}
]);

const Routes = () => {
  return <RouterProvider router={router} />; 
};

export default Routes;
