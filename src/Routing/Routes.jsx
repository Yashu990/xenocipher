// src/routes/Routes.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import App from "../App";
import HandHeldPage from "../pages/HandHeldPage";
import DFMDPage from "../pages/DFMDPage";
import ShoePage from "../pages/ShoePage";
import Cart from "../pages/Cart";
import AboutUs from "../pages/AboutUs";
// import ChiperX800115 from "../pages/ChiperX800115";
import ProductDetails from "../pages/ProductDetails";
import MetalsDetailPage from "../pages/MetalsDetailPage";

// Router setup
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/handheld", element: <HandHeldPage /> },
  { path: "/dfmd", element: <DFMDPage /> },
  { path: "/shoepage", element: <ShoePage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/aboutus", element: <AboutUs /> },
  // { path: "/chiperx800115", element: <ChiperX800115 /> },

  // Dynamic product routes
  { path: "/products/:productId", element: <ProductDetails /> },
  { path: "/metals/:metalId", element: <MetalsDetailPage /> },
]);

// RouterProvider component
const Routes = () => <RouterProvider router={router} />;

export default Routes;
