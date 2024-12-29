import {useEffect} from "react";
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

  // useEffect(() => {
  //     fetch("http://localhost:3000/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         login: "Zalupov",
  //         password: "123456",
  //         email: "zalupov@gmail.com",
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((res) => console.log(res));
  //   }, []);

  return <Sign config={config} />;
};

export default RegistrationPage;
