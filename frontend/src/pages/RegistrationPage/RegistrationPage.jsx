import Sign from "../../components/Sign/Sign";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../store/sign/api/sign.api";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [registerRequest] = useRegisterMutation();

  const onSubmit = (data) => {
    registerRequest(data)
      .unwrap()
      .then(() => {
        navigate("/login");
      });
  };

  const config = {
    header: "Регистрация",
    onSubmit,
    fields: [
      {
        type: "text",
        placeholder: "Username",
        name: "login",
      },
      {
        type: "email",
        name: "email",
        placeholder: "Email",
      },
      {
        type: "password",
        name: "password",
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
