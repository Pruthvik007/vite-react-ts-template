import React, { Suspense } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import BackDrop from "./components/common/BackDrop.tsx";
import { BASE_URL } from "./constants/Config.ts";
const PageNotFound = React.lazy(() => import("./pages/PageNotFound.tsx"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const routeObj: RouteObject[] = [
  {
    path: BASE_URL,
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
  {
    path: "/notfound",
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
const Router = createBrowserRouter(routeObj);

export default Router;
