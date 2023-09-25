import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import LayoutDashboard from './components/LayoutDashboard/LayoutDashboard';

const Home = React.lazy(() => import('./pages/home'));
const Teste = React.lazy(() => import('./pages/teste'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutDashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/teste",
                element: <Teste />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
