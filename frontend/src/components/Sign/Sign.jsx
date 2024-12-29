import classes from "./Sign.module.css";
import { useForm } from "react-hook-form";

const Sign = ({ config }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className={classes.body}>
      <section className={classes.container}>
        <h1 className={classes.title}>{config.header}</h1>
        <form onSubmit={handleSubmit(config.onSubmit)} className={classes.panel}>
          {config.fields?.map((field) => (
            <input
              key={field.placeholder}
              className={classes["auth-input"]}
              required
              {...field}
              {...register(field.name)}
            />
          ))}

          {config.link && (
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              className={classes.naeb}
            >
              Забыли пароль?
            </a>
          )}

          <div className={classes.panel_buttons}>
            {config.buttons?.map((button) => (
              <button
                key={button.text}
                type={button.type}
                className={classes.goida_button}
                onClick={button.action}
              >
                {button.text}
              </button>
            ))}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Sign;
