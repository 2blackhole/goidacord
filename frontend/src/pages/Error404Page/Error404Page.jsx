import React from "react";
import classes from "./Error404Page.module.css";
import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <h1 className={classes.error_number}>404</h1>

        <p className={classes.error_text}>страница не найдена</p>

        <Link
          to={{
            pathname: "/login",
          }}
          className={classes.link_to_main}
        >
          вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default Error404Page;
