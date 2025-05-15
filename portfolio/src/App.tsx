import { Layout } from "./components/Layout";
import { Home } from "./Pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
])