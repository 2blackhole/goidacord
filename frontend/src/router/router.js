import { LoginPage, MainPage, RegisterPage } from "../pages";

export const PUBLIC_PAGES = [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
];

export const PRIVATE_PAGES = [
  {
    path: '/',
    component: MainPage
  }
]
