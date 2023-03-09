import React, { useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

import BurgerMenu from "../../../components/BurgerMenu";
import Button from "../../../components/Button/Button";
import { ButtonType } from "../../../components/Button/Button";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import UserName from "../../../components/UserName";
import styles from "./Heder.module.scss";
import { RoutesList } from "../../Router";
import { UserIcon } from "../../../assets/icons";
const Heder = () => {
  const [isOpened, setOpened] = useState(false);
  const changeState = () => {
    return setOpened(!isOpened);
  };

  const navigate = useNavigate();

  const onAuthButtonClic = () => {
    navigate(RoutesList.SignIn);
  };

  const isLoggedIn = true;

  const navButtonList = useMemo(
    () => [
      {
        title: "Home",
        key: RoutesList.Home,
      },
      ...(!isLoggedIn
        ? []
        : [
            {
              title: "Add post",
              key: RoutesList.AddPost,
            },
          ]),
      {
        title: "Sign Up",
        key: RoutesList.SignUp,
      },
      {
        title: "Confirmation",
        key: RoutesList.RegConfirmation,
      },
    ],
    [isLoggedIn]
  );
  const location = useLocation();
  return (
    <>
      <div className={styles.container}>
        <BurgerMenu isOpened={isOpened} changeState={changeState} />
        {isLoggedIn ? (
          <UserName UserName={"Artem Malkin"} className={styles.userName} />
        ) : (
          <Button
            title={<UserIcon />}
            type={ButtonType.Primary}
            onClick={onAuthButtonClic}
          />
        )}
      </div>
      {isOpened && (
        <div className={styles.mainContainer}>
          <div className={styles.actionsContainer}>
            {isLoggedIn && (
              <UserName UserName={"Artem Malkin"} className={styles.menuUser} />
            )}

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
              title={!isLoggedIn ? "Sign In" : "Log Out"}
              type={ButtonType.Secondary}
              onClick={!isLoggedIn ? onAuthButtonClic : () => {}}
              className={styles.authButton}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Heder;
