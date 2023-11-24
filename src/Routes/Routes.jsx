import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Details from "../Components/Details";
import Donations from "../Components/Donations";
import Statistics from "../Components/Statistics";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/details/:id",
          element: <Details></Details>
        },
        {
          path: "/donations",
          element: <Donations></Donations>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        }
      ]
    },
  ]);

export default router;