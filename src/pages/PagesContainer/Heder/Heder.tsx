import React, { useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

import BurgerMenu from "../../../components/BurgerMenu";
import Button from "../../../components/Button/Button";
import { ButtonType } from "../../../utils/@globalTypes";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
// import UserName from "../../../components/UserName";
import styles from "./Heder.module.scss";
import { RoutesList } from "../../Router";
import { UserIcon } from "../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { AuthSalectors, logoutUser } from "../../../redux/reducers/authSlice";

const Heder = () => {
  const [isOpened, setOpened] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = useSelector(AuthSalectors.getLoggendIn);
  const dispatch = useDispatch();

  const changeState = () => {
    return setOpened(!isOpened);
  };

  const onAuthButtonClic = () => {
    navigate(RoutesList.SignIn);
  };

  const onLogoutClick = () => {
    dispatch(logoutUser());
  };

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
      {
        title: "ResetPassword",
        key: RoutesList.ResetPassword,
      },
      {
        title: "New password",
        key: RoutesList.NewPassword,
      },
    ],
    [isLoggedIn]
  );

  const name = useSelector(AuthSalectors.getUserNameInfo);
  const userName = name?.username ? name?.username : "";

  const location = useLocation();
  return (
    <>
      <div className={styles.container}>
        <BurgerMenu isOpened={isOpened} changeState={changeState} />
        {isLoggedIn ? (
          // <UserName UserName={userName} className={styles.userName} />
          userName
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
            {isLoggedIn &&
              // <UserName UserName={userName} className={styles.menuUser} />
              userName}

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
              onClick={!isLoggedIn ? onAuthButtonClic : onLogoutClick}
              className={styles.authButton}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Heder;
