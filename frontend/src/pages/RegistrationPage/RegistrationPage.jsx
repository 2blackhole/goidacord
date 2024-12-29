import React from "react";
import Sign from "../../components/Sign/Sign";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const config = {
    header: "Регистрация",
    fields: [
      {
        type: "text",
        placeholder: "Username",
        name: "registerNickName",
      },
      {
        type: "email",
        name: "registerEmail",
        placeholder: "Email",
      },
      {
        type: "password",
        name: "registerPassword",
        placeholder: "Password",
      },
      {
        type: "password",
        name: "confirmPassword",
        placeholder: "Confirm password",
      },
    ],
    buttons: [
      { type: "button", text: "подзайти", action: () => navigate("/login") },
      { type: "submit", text: "регнуть" },
    ],
    link: false,
  };
  return <Sign config={config} />;
};

export default RegistrationPage;
