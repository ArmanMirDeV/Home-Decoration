import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";





const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <p> Loading... </p>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('./furnitureData.json')
            },

            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/wishlist",
                element: <Wishlist></Wishlist>
            },
        ]
    }

]);

export default router





