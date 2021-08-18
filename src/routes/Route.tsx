import * as React from "react";

export interface typeRoute {
  path: string;
  exact: boolean;
  component: React.LazyExoticComponent<React.FC>;
}

export const Routes: typeRoute[] = [
  {
    path: "/profile",
    exact: true,
    component: React.lazy(() => import("../pages/profile")),
  },
  {
    path: "/create-playlist",
    exact: true,
    component: React.lazy(() => import("../pages/createPlaylist")),
  },
  {
    path: "/home",
    exact: true,
    component: React.lazy(() => import("../pages/home")),
  },
  {
    path: "/collection",
    exact: true,
    component: React.lazy(() => import("../pages/collection")),
  },
  {
    path: "/:id",
    exact: true,
    component: React.lazy(() => import("../pages/detailPlaylist")),
  },
];
