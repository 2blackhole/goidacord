import { lazy } from "react";

const LoginPage = lazy(() => import("./LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./RegistrationPage/RegistrationPage"));
const Error404Page = lazy(() => import("./Error404Page/Error404Page"));
const MainPage = lazy(() => import("./MainPage/MainPage"));
import LoadingPage from './LoadingPage/LoadingPage'

export { LoginPage, RegisterPage, Error404Page, MainPage, LoadingPage };