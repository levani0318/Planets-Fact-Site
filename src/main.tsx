import { createRoot } from "react-dom/client";
import "./index.css";
import Mercury from "./Mercury.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/Mercury",
    element: <Mercury />,
  },
  {
    path: "/Venus",
    element: <Venus />,
  },
  {
    path: "/Earth",
    element: <Earth />,
  },
  {
    path: "/Mars",
    element: <Mars />,
  },
  {
    path: "/Jupiter",
    element: <Jupiter />,
  },
  {
    path: "/Saturn",
    element: <Saturn />,
  },
  {
    path: "/Uranus",
    element: <Uranus />,
  },
  {
    path: "/Neptune",
    element: <Neptune />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
