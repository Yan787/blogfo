import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { ButtonType } from "../Buttom/Button";
import Button from "../Buttom/Button";
import { CloseIcon, OpenedMenu } from "../../assets/icons";

enum ButgerState {
  Opened,
  Closed,
}

const BurgerMenu = () => {
  const [activeMenu, setActiveMenu] = useState(ButgerState.Opened)
  const onBurgerClick = () => {
    ButgerState.Opened === activeMenu 
    ? setActiveMenu(ButgerState.Closed)
    : setActiveMenu(ButgerState.Opened)
  }
  return (
    <Button 
      className={styles.btn}
      type={ButtonType.Primary}
      title={activeMenu === ButgerState.Opened ? <CloseIcon /> : <OpenedMenu />}
      onClick={onBurgerClick}
      
      />
  )
}
export default BurgerMenu