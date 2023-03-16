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
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPost } from "../../redux/reducers/postSlice";
import { setPostVisible } from "../../redux/reducers/postSlice";
import { PostSelectors } from "../../redux/reducers/postSlice";
import { setStatus, LikeStatus } from "../../redux/reducers/postSlice";
import { setBookmarkStatus } from "../../redux/reducers/postSlice";

const Card: FC<CardProps> = ({ card, size }) => {
  const { title, image, date, text } = card;
  const { theme } = useThemeContext();

  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;
  const isDark = theme === Theme.Dark;

  const dispatch = useDispatch();
  const selector = useSelector(PostSelectors.getVisibleSelectedModal);

  const onClickMore = () => {
    dispatch(setSelectedPost(card));
    dispatch(setPostVisible(true));
  };

  const onStatusClick = (status: LikeStatus) => () => {
    dispatch(setStatus({ status, card }));
  };

  const likePost = useSelector(PostSelectors.getLikedPost);
  const dislikePost = useSelector(PostSelectors.getDislikedPost);
  const isVisible = useSelector(PostSelectors.getVisibleSelectedModal);

  const likeIndex = likePost.findIndex((post) => post.id === card.id);
  const dislikeIndex = dislikePost.findIndex((post) => post.id === card.id);

  const onBookmarkClick = () => () => {
    dispatch(setBookmarkStatus(card));
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
                [styles.darkTitle]: !isVisible && isDark,
              })}
            >
              {title}
            </div>
          </div>
          {size === CardSize.Large && <div className={styles.text}>{text}</div>}
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
            [styles.darkIconContainer]: !isVisible && isDark,
          })}
        >
          <div onClick={onStatusClick(LikeStatus.Like)}>
            <LikeIcon />
            {likeIndex > -1 && 1}
          </div>
          <div onClick={onStatusClick(LikeStatus.DisLike)}>
            <DislikeIcon />
            {dislikeIndex > -1 && 1}
          </div>
        </div>
        <div
          className={classNames(styles.iconContainer, {
            [styles.darkIconContainer]: !isVisible && isDark,
          })}
        >
          <div onClick={onBookmarkClick}>
            <BookmarkIcon />
          </div>
          {!selector && (
            <div onClick={onClickMore}>
              <MoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
