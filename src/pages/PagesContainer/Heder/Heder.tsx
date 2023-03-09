import React, { useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

import BurgerMenu from "../../../components/BurgerMenu";
import Button from "../../../components/Buttom/Button";
import { ButtonType } from "../../../components/Buttom/Button";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import UserName from "../../../components/UserName";
import styles from "./Heder.module.scss";
import { RoutesList } from "../../Router";

const Heder = () => {
  const [isOpened, setOpened] = useState(false);
  const changeState = () => {
    return setOpened(!isOpened);
  };

  const navigate = useNavigate();

  const onAuthButtonClic = () => {
    navigate(RoutesList.SignIn);
  };

  const navButtonList = useMemo(
    () => [
      {
        title: "Home",
        key: RoutesList.Home,
      },
      {
        title: "Add post",
        key: RoutesList.AddPost,
      },
      {
        title: "Sign Up",
        key: RoutesList.SignUp,
      },
      {
        title: "Confirmation",
        key: RoutesList.RegConfirmation,
      },
    ],
    []
  );
  const location = useLocation();
  return (
    <>
      <div className={styles.container}>
        <BurgerMenu isOpened={isOpened} changeState={changeState} />
        <UserName UserName={"Artem Malkin"} />
      </div>
      {isOpened && (
        <div className={styles.mainContainer}>
          <div className={styles.actionsContainer}>
            {navButtonList.map(({ title, key }) => {
              return (
                <NavLink
                  to={key}
                  key={key}
                  className={classNames(styles.navButton, {
                    [styles.activeNavButton]: location.pathname === key,
                  })}
                >
                  {title}
                </NavLink>
              );
            })}
          </div>
          <div>
            <ThemeSwitcher />
            <Button
              title={"Sign In"}
              type={ButtonType.Secondary}
              onClick={onAuthButtonClic}
              className={styles.authButton}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Heder;
