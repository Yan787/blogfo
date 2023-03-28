import React from "react";

import styles from "./ResetPassword.module.scss";
import FormPage from "../FormPage/FormProps";
import Frame from "../../components/Frame";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme/Context";
import { Theme } from "../../context/Theme/Context";
import Input from "../../components/Input/Input";

const ResetPassword = () => {
  const { theme } = useThemeContext();

  return (
    <div>
      <FormPage title={"Reset password"} />
      <Frame>
        <div
          className={classNames({ [styles.darkText]: theme === Theme.Dark })}
        >
          You will receive an email example@gmail.com with a link to reset your
          password!
        </div>
        <Input
          onChange={() => {}}
          type={"text"}
          title={"Email"}
          placeholder={"example@gmail.com"}
        />
        <Button
          title={"Go to home"}
          type={ButtonType.Primary}
          onClick={() => {}}
        />
      </Frame>
    </div>
  );
};
export default ResetPassword;
