import React, { FC, useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { ButtonType } from "../Buttom/Button";
import Button from "../Buttom/Button";
import { CloseIcon, OpenedMenu } from "../../assets/icons";
type BurgerMenuProps = {
  changeState: () => void;
  isOpened: boolean;
};
const BurgerMenu: FC<BurgerMenuProps> = ({ isOpened, changeState }) => {
  return (
    <Button
      className={styles.btn}
      type={ButtonType.Primary}
      title={isOpened ? <CloseIcon /> : <OpenedMenu />}
      onClick={changeState}
    />
  );
};
export default BurgerMenu;
