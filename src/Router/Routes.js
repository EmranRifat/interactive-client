import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Category/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/category/:id",
        element: <Category></Category>,
        loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)



      },
    
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/category",
        element: <Category></Category>,

      },
    ],
  },
]);
