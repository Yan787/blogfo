import React, { FC } from "react";
import classNames from "classnames";

import Title from "../../components/Title";
import styles from "./FormProps.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";

type FormPageProps = {
  title: string;
};

const FormPage: FC<FormPageProps> = ({ title }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <div className={styles.btnHome}>Back to home</div>
      <Title title={title} />
    </div>
  );
};
export default FormPage;
