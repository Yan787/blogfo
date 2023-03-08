import React from "react";
import Button from "../../components/Buttom/Button";
import Frame from "../../components/Frame";
import FormPage from "../FormPage/FormProps";
import { ButtonType } from "../../components/Buttom/Button";
import styles from "./RegConfirmation.module.scss";

const RegConfirmation = () => {
  return (
    <div>
      <FormPage title={"Registration Confirmation"} />
      <Frame>
        <div className={styles.container}>
          <div>
            Please activate your account with the activation link in the email
            .Please, check your email
          </div>
          <Button
            title={"Go to home"}
            type={ButtonType.Primary}
            onClick={() => {}}
            className={styles.btn}
          />
        </div>
      </Frame>
    </div>
  );
};
export default RegConfirmation;
