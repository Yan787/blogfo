import Reacts from "react";
import classNames from "classnames";

import styles from "./Success.module.scss";
import Frame from "../../components/Frame";
import FormPage from "../FormPage/FormProps";
import Buttom from "../../components/Button";
import { ButtonType } from "../../components/Button/Button";
import { Theme, useThemeContext } from "../../context/Theme/Context";

const Success = () => {
  const { theme } = useThemeContext();
  return (
    <div className={classNames({ [styles.darkWrapper]: theme === Theme.Dark })}>
      <FormPage title={"Success"} />
      <Frame>
        <div
          className={classNames(styles.successText, {
            [styles.darkSuccessText]: theme === Theme.Dark,
          })}
        >
          <div>Email confirmed.</div>
          <div>Your registration is now completed</div>
        </div>
        <Buttom
          className={styles.btn}
          title={"Go to home"}
          type={ButtonType.Primary}
          onClick={() => {}}
        />
      </Frame>
    </div>
  );
};
export default Success;
