import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../components/ErrorPage";
import Instructors from "../pages/Instructors/Instructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../layouts/Dashboard/Dashboard";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import FeedBack from "../pages/Dashboard/ManageClass/FeedBack";
import InstructorClasses from "../pages/InstructorClasses/InstructorClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allInstructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "allClasses",
        element: <AllClasses></AllClasses>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "manageUsers",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "manageClasses",
        element: <ManageClass></ManageClass>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "feedback/:id",
        element: <FeedBack></FeedBack>,
      },
      {
        path:"instructorAllClasses",
        element:<InstructorClasses></InstructorClasses>
      }
    ],
  },
]);
