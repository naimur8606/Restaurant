import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import DisplayRecipes from "../ShareComponents/DisplayRecipes";
import Login from "../Pages/Create&Login/Login";
import CreateUser from "../Pages/Create&Login/CreateUser";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/order",
        element: <OurShop></OurShop>,
        loader: () => fetch("http://localhost:5000/RecipesCount"),
        children: [
          {
            path: '/order/:category',
            element: <DisplayRecipes></DisplayRecipes>
          }
        ]
      },
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/registration",
    element: <CreateUser></CreateUser>
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      }
    ]
  },
]);

export default router;