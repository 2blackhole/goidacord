import React from "react";
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

  return <Sign config={config} />;
};

export default LoginPage;
