import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Dashboar from "./components/Dashboard";
import NavBar from "./components/NavBar";
import ParamComp from "./components/ParamComp";
import Courses from "./components/Courses";
import Mocktest from "./components/Mocktest";
import Reports from "./components/Reports";
import NotFound from "./components/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <NavBar />
        <Dashboar />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "mock-tests",
        element: <Mocktest />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <NavBar />
        <ParamComp />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />,
    </>
  );
}

export default App;
