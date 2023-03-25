import React from "react";

import styles from "./NewPassword.module.scss";
import Frame from "../../components/Frame";
import FormPage from "../FormPage/FormProps";
import Imput from "../../components/Input";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";

const NewPassword = () => {
  return (
    <div>
      <FormPage title={"New password"} />
      <Frame>
        <Imput type={"text"} title={"Password"} placeholder={"Your password"} />
        <Imput
          type={"password"}
          title={"Password"}
          placeholder={"Your password"}
        />
        <Button
          title={"Set password"}
          type={ButtonType.Primary}
          onClick={() => {}}
        />
      </Frame>
    </div>
  );
};
export default NewPassword;
