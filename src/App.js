import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProuductPage from "./pages/ProuductPage";
import AppLayout from "./components/layout/AppLayout";
import SuccessPage from "./pages/SuccessPage";
import ErrorPage from "./pages/ErrorPage";
import AdminLayout from "./components/layout/AdminLayout";
import DashboardPage from "./pages/DashbaordPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

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
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
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
  {
    path: "/dashboard",
    element: (
      <AdminLayout>
        <DashboardPage />
      </AdminLayout>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
