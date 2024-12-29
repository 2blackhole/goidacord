import { Suspense, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { PUBLIC_PAGES } from "./router/router";
import { useEffect } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!isLogin) {
  //     navigate("/login");
  //   }
  // }, []);

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
        : ""}
    </Routes>
  );
}

export default App;
