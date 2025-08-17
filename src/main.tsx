import { createRoot } from "react-dom/client";
import "./index.css";
import Earth from "./pages/Earth.tsx";
import Venus from "./pages/Venus.tsx";
import Mars from "./pages/Mars.tsx";
import Jupiter from "./pages/Jupiter.tsx";
import Saturn from "./pages/Saturn.tsx";
import Uranus from "./pages/Uranus.tsx";
import Neptune from "./pages/Neptune.tsx";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/venus",
    element: <Venus />,
  },
  {
    path: "/earth",
    element: <Earth />,
  },
  {
    path: "/mars",
    element: <Mars />,
  },
  {
    path: "/jupiter",
    element: <Jupiter />,
  },
  {
    path: "/saturn",
    element: <Saturn />,
  },
  {
    path: "/uranus",
    element: <Uranus />,
  },
  {
    path: "/neptune",
    element: <Neptune />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
