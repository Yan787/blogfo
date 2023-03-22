import React, { useEffect } from "react";
import classNames from "classnames";

import styles from "./Post.module.scss";
import { LikeIcon, DislikeIcon, BookmarkIcon } from "../../assets/icons";
import Buttom from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost, PostSelectors } from "../../redux/reducers/postSlice";
import { useParams } from "react-router-dom";

const Post = () => {
  const { theme } = useThemeContext();

  const { postId } = useParams();
  const dispatch = useDispatch();
  const singlePost = useSelector(PostSelectors.getSinglePost);

  useEffect(() => {
    postId && dispatch(getSinglePost(postId));
  }, []);

  const isDark = theme === Theme.Dark;

  return (
    singlePost && (
      <div
        className={classNames(styles.container, {
          [styles.darkContainer]: isDark,
        })}
      >
        <div className={styles.navigation}>
          <div
            className={classNames(styles.nav, {
              [styles.darkNav]: isDark,
            })}
          >
            Home
          </div>
          <div
            className={classNames(styles.nav, {
              [styles.darkNav]: isDark,
            })}
          >
            Post {singlePost?.id}
          </div>
        </div>
        {singlePost?.title}
        <div className={styles.wrapperImge}>
          <img className={styles.imge} alt="imge" src={singlePost?.image} />
        </div>
        <div className={styles.wrapperText}>
          <p
            className={classNames(styles.text, {
              [styles.darkText]: isDark,
            })}
          >
            {singlePost?.text}
          </p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.wrapperBtn}>
            <Buttom
              title={<LikeIcon />}
              onClick={() => {}}
              type={ButtonType.Secondary}
            />
            <Buttom
              title={<DislikeIcon />}
              onClick={() => {}}
              type={ButtonType.Secondary}
            />
          </div>
          <div>
            <Buttom
              title={
                <div className={styles.bookmark}>
                  <BookmarkIcon />
                  Add to favorites
                </div>
              }
              onClick={() => {}}
              type={ButtonType.Secondary}
            />
          </div>
        </div>
        <div
          className={classNames(styles.border, {
            [styles.darkBorder]: isDark,
          })}
        ></div>
      </div>
    )
  );
};
export default Post;
