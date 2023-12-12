import { createBrowserRouter } from "react-router-dom";
import Layout from "./../Layout";
import DemoDashboard from "./../pages/demo-ui/DemoDashboard";
import ApiDashboard from "./../pages/api-ui/ApiDashboard";
import DatabaseDashboard from "./../pages/database-ui/DatabaseDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        //Diwakar block
        path: "/ui",
        element: <DemoDashboard />,
      },
      {
        //Nithish block
        path: "/api",
        element: <ApiDashboard />,
      },
      {
        path: "/database",
        element: <DatabaseDashboard />,
      },
      {
        path: "*",
        element: <h1>page not found</h1>,
      },
    ],
  },
]);

export default router;
