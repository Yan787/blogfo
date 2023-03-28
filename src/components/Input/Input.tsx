import React, { ChangeEvent, FC } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";

type InputProps = {
  value?: string;
  onChange: (value: string) => void;
  title: string;
  placeholder: string;
  disabled?: boolean;
  errorText?: string;
  type?: string;
};
const Input: FC<InputProps> = ({
  value,
  onChange,
  title,
  type,
  placeholder,
  disabled,
  errorText,
}) => {
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const { theme } = useThemeContext();
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.title, {
          [styles.darkText]: theme === Theme.Dark,
        })}
      >
        {title}
      </div>
      <input
        value={value}
        className={classNames(styles.input, {
          [styles.disabled]: disabled,
          [styles.errorText]: errorText,
        })}
        placeholder={placeholder}
        onChange={onChangeText}
        disabled={disabled}
        type={type}
      />
      {errorText && <div className={styles.validText}>{errorText}</div>}
    </div>
  );
};
export default Input;
