import Sign from "../../components/Sign/Sign";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../store/sign/api/sign.api";
import { useDispatch } from "react-redux";
import { login } from "../../store/sign/slice/sign.slice";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginRequest] = useLoginMutation();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    loginRequest(data)
        .unwrap()
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.token);
          dispatch(login());
          navigate("/");
        });
  };

  const config = {
    header: "goida login",
    onSubmit,
    fields: [
      {
        type: "text",
        name: "login",
        placeholder: "Username",
      },
      {
        type: "password",
        name: "password",
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
