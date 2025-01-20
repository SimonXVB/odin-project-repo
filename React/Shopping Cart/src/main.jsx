import { createRoot } from 'react-dom/client'
import { Home } from './comps/Homepage/home';
import { Cart } from './comps/Cart Page/cart';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "cart",
        element: <Cart />,
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);