import React from "react";
import classNames from "classnames";

import styles from "./SignIn.module.scss";
import Imput from "../../components/Input/Input";
import Buttom from "../../components/Buttom";
import { ButtonType } from "../../components/Buttom/Button";
import FormPage from "../FormPage/FormProps";
import Frame from "../../components/Frame";
import { Theme, useThemeContext } from "../../context/Theme/Context";

const SingIn = () => {
  const { theme } = useThemeContext();

  return (
    <div className={classNames({ [styles.darkWrapper]: theme === Theme.Dark })}>
      <FormPage title={"Sign In"} />
      <Frame>
        <div className={styles.inputWrapper}>
          <Imput title={"Email"} placeholder={"Your email"} />
          <div>
            <Imput title={"Password"} placeholder={"Your password"} />
            <div
              className={classNames(styles.forgotPass, {
                [styles.darkforgotPass]: theme === Theme.Dark,
              })}
            >
              Forgot password?
            </div>
          </div>
        </div>
        <div>
          <Buttom
            className={styles.btn}
            title={"Sign In"}
            type={ButtonType.Primary}
            onClick={() => {}}
          />
          <div
            className={classNames(styles.signUp, {
              [styles.darkSignUp]: theme === Theme.Dark,
            })}
          >
            Don’t have an account?{" "}
            <a
              className={classNames(styles.link, {
                [styles.darkLink]: theme === Theme.Dark,
              })}
              href="#"
            >
              &nbsp;Sign Up
            </a>
          </div>
        </div>
      </Frame>
    </div>
  );
};
export default SingIn;
