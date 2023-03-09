import React from "react";
import Button from "../../components/Button/Button";
import Frame from "../../components/Frame";
import FormPage from "../FormPage/FormProps";
import { ButtonType } from "../../components/Button/Button";
import styles from "./RegConfirmation.module.scss";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../context/Theme/Context";

const RegConfirmation = () => {
  const { theme } = useThemeContext();
  return (
    <div>
      <FormPage title={"Registration Confirmation"} />
      <Frame>
        <div className={styles.container}>
          <div
            className={classNames(styles.text, {
              [styles.darkText]: theme === Theme.Dark,
            })}
          >
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
