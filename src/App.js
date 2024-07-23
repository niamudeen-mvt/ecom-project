import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
