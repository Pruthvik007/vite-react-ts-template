import { Suspense } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import BackDrop from "./components/common/BackDrop.tsx";
import { APP_BASE_URL } from "./constants/Config.ts";
import PageNotFound from "./pages/PageNotFound.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

const publicRoutes: RouteObject[] = [
  {
    path: "/pagenotfound",
    element: (
      <Suspense fallback={<BackDrop />}>
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<BackDrop />}>
        <PageNotFound />
      </Suspense>
    ),
  },
];

const allPrivateRoutes: RouteObject[] = [
  {
    path: APP_BASE_URL,
    element: <ProtectedRoute role="*" />,
    children: [
      {
        path: APP_BASE_URL,
        element: <App />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<BackDrop />}>
                <HomePage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter([
  ...publicRoutes,
  ...allPrivateRoutes,
]);
