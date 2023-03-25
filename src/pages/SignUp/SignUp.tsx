import React from "react";
import Frame from "../../components/Frame";
import FormPage from "../FormPage/FormProps";
import Imput from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { ButtonType } from "../../utils/@globalTypes";
import styles from "./SignUp.module.scss";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../Router";
const SignUp = () => {
  return (
    <>
      <FormPage title={"Sign Up"} />
      <Frame>
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <Imput type={"text"} title={"Name"} placeholder={"Your name"} />
            <Imput type={"text"} title={"Email"} placeholder={"Your email"} />
            <Imput
              type={"password"}
              title={"Password"}
              placeholder={"Your password"}
            />
            <Imput
              type={"password"}
              title={"Confirm password"}
              placeholder={"Confirm password"}
            />
          </div>
          <Button
            title={"Sign Up"}
            type={ButtonType.Primary}
            onClick={() => {}}
            className={styles.btn}
          />
        </div>
        <div className={styles.signUp}>
          Already have an account?
          <NavLink to={RoutesList.SignIn} className={styles.link}>
            &nbsp;Sign In
          </NavLink>
        </div>
      </Frame>
    </>
  );
};
export default SignUp;
