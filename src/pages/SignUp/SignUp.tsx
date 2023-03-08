import React from "react";
import Frame from "../../components/Frame";
import FormPage from "../FormPage/FormProps";
import Imput from "../../components/Input/Input";
import Button from "../../components/Buttom/Button";
import { ButtonType } from "../../components/Buttom/Button";
import styles from "./SignUp.module.scss";
const SignUp = () => {
  return (
    <>
      <FormPage title={"Sign Up"} />
      <Frame>
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <Imput title={"Name"} placeholder={"Your name"} />
            <Imput title={"Email"} placeholder={"Your email"} />
            <Imput title={"Password"} placeholder={"Your password"} />
            <Imput
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
          Already have an account? <a className={styles.link}>&nbsp;Sign In</a>
        </div>
      </Frame>
    </>
  );
};
export default SignUp;
