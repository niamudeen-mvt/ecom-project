import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProuductPage from "./pages/ProuductPage";
import AppLayout from "./components/layout/AppLayout";
import SuccessPage from "./pages/SuccessPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "/product/:id",
        element: <ProuductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
