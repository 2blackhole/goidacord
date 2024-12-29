import React, { useEffect } from "react";
import Sign from "../../components/Sign/Sign";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const config = {
    header: "goida login",
    fields: [
      {
        type: "text",
        placeholder: "Username",
      },
      {
        type: "password",
        placeholder: "Password",
      },
    ],
    buttons: [
      {
        type: "submit",
        text: "Войти",
      },
      {
        type: "button",
        text: "Регистрация",
        action: () => {
          navigate("/register");
        },
      },
    ],
    link: true,
  };

  // useEffect(() => {
  //   fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       login: "Zalupov",
  //       password: "123456",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);

  return <Sign config={config} />;
};

export default LoginPage;
