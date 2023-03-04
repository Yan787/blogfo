import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";

type ImputProps = {
  title: string;
  placeholder: string;
  disabled?: boolean;
  errorText?: boolean;
  className?: boolean;
};

const Imput: FC<ImputProps> = ({
  title,
  disabled,
  placeholder,
  errorText,
  className,
}) => {
  const { theme } = useThemeContext();
  return (
    <div className={styles.margin}>
      <div
        className={classNames(styles.title, {
          [styles.darkTitle]: theme === Theme.Dark,
        })}
      >
        {title}
      </div>
      <input
        className={classNames(styles.input, className, {
          [styles.disabled]: disabled,
          [styles.errorText]: errorText,
        })}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
      />
      {errorText && <div className={styles.err}>Error text</div>}
    </div>
  );
};
export default Imput;
