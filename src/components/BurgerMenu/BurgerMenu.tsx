import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { ButtonType } from "../Buttom/Button";
import Button from "../Buttom/Button";
import { CloseIcon, OpenedMenu } from "../../assets/icons";


const BurgerMenu = () => {
  const [isOpened, setOpend] = useState(false)

  const onBurgerClick = () => {
    return setOpend(!isOpened)
  }
  
  return (
    <Button 
      className={styles.btn}
      type={ButtonType.Primary}
      title={isOpened ? <CloseIcon /> : <OpenedMenu />}
      onClick={onBurgerClick}
      
      />
  )
}
export default BurgerMenu