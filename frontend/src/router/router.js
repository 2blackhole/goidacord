import { lazy } from "react";

import { LoginPage, RegisterPage, Error404Page } from "../pages";

export const PUBLIC_PAGES = [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "*",
    component: Error404Page,
  },
];
