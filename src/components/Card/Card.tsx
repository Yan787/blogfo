import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Card.module.scss";
import { CardProps, CardSize } from "./types";
import {
  LikeIcon,
  DislikeIcon,
  BookmarkIcon,
  MoreIcon,
} from "../../assets/icons";
import { useThemeContext } from "../../context/Theme/Context";
import { Theme } from "../../context/Theme/Context";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../../redux/reducers/postSlice";
import { setPostVisible } from "../../redux/reducers/postSlice";

const Card: FC<CardProps> = ({ Card, Size }) => {
  const { theme } = useThemeContext();

  const { title, image, date, text } = Card;
  const isMedium = Size === CardSize.Medium;
  const isSmall = Size === CardSize.Small;
  const isDark = theme === Theme.Dark;

  const dispatch = useDispatch();

  const onClickMore = () => {
    dispatch(setSelectedPost(Card));
    dispatch(setPostVisible(true));
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.mediumContainer]: isMedium,
        [styles.smallContainer]: isSmall,
        [styles.darkContainer]: isDark,
      })}
    >
      <div
        className={classNames(styles.infoContainer, {
          [styles.mediumInfoContainer]: isMedium,
          [styles.smallInfoContainer]: isSmall,
        })}
      >
        <div className={styles.mainInfoContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.date}>{date}</div>
            <div
              className={classNames(styles.title, {
                [styles.mediumTitle]: isMedium || isSmall,
                [styles.darkTitle]: isDark,
              })}
            >
              {title}
            </div>
          </div>
          {Size === CardSize.Large && <div className={styles.text}>{text}</div>}
        </div>
        <img
          src={image}
          className={classNames(styles.image, {
            [styles.mediumImage]: isMedium,
            [styles.smallImage]: isSmall,
          })}
        />
      </div>
      <div className={styles.footer}>
        <div
          className={classNames(styles.iconContainer, {
            [styles.darkIconContainer]: isDark,
          })}
        >
          <div>
            <LikeIcon />
          </div>
          <div>
            <DislikeIcon />
          </div>
        </div>
        <div
          className={classNames(styles.iconContainer, {
            [styles.darkIconContainer]: isDark,
          })}
        >
          <div>
            <BookmarkIcon />
          </div>
          <div onClick={onClickMore}>
            <MoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
