import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from './components/context';
import { createRoot } from 'react-dom/client'
import { NotFound } from "./components/notFound";
import { Create } from "./components/create";
import { Update } from "./components/update";
import Dashboard from "./components/dashboard";
import Home from "./components/home";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/create",
        element: <Create />
    },
    {
        path: "/update/:id",
        element: <Update />
    }
]);

createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>
);