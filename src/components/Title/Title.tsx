import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Title.module.scss";
import { useThemeContext } from "../../context/Theme/Context";
import { Theme } from "../../context/Theme/Context";

type TitleProps = {
  title: string;
};

const Title: FC<TitleProps> = ({ title }) => {
  const { theme } = useThemeContext();
  return (
    <h1
      className={classNames(styles.h1, {
        [styles.darkTitle]: theme === Theme.Dark,
      })}
    >
      {title}
    </h1>
  );
};

export default Title;
