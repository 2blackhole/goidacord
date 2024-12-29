import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PRIVATE_PAGES, PUBLIC_PAGES } from "./router/router";
import { useSelector } from "react-redux";
import { Error404Page } from "./pages";

function App() {
  const { isLogin } = useSelector((state) => state.sign);

  return (
    <Routes>
      {!isLogin
        ? PUBLIC_PAGES.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <Suspense fallback={<div>Eblan</div>}>
                  <page.component />
                </Suspense>
              }
            />
          ))
        : PRIVATE_PAGES.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <Suspense fallback={<div>Eblan</div>}>
                  <page.component />
                </Suspense>
              }
            />
          ))}
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Eblan</div>}>
            <Error404Page />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
