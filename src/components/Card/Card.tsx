import React, {FC} from "react";
import classNames from "classnames";

import styles from "./Card.module.scss";
import {CardProps, CardSize} from "./types";
import { LikeIcon, DislikeIcon, BookmarkIcon, MoreIcon } from "../../assets/icons";

const Card: FC<CardProps> = ({Card, Size}) => {
    const {title, image, date, text} = Card
    const isMedium = Size === CardSize.Medium   
    const isSmall = Size === CardSize.Small   

    return (
        <div className={classNames(styles.container, {
            [styles.mediumContainer]: isMedium,
            [styles.smallContainer]: isSmall,
        })}>
            <div className={classNames(styles.infoContainer, {
                [styles.mediumInfoContainer]: isMedium,
                [styles.smallInfoContainer]: isSmall,
            })}>
                <div className={styles.mainInfoContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.date}>{date}</div>
                        <div className={classNames(styles.title, {
                            [styles.mediumTitle]: isMedium || isSmall,
                        })}>{title}</div>
                    </div>
                    {Size === CardSize.Large && <div className={styles.text}>{text}</div>}
                </div>
                <img src={image} className={classNames(styles.image, {
                    [styles.mediumImage]: isMedium,
                    [styles.smallImage]: isSmall,
                })}/>
            </div>
            <div className={styles.footer}> 
                <div className={styles.iconContainer}>
                    <div><LikeIcon /></div>
                    <div><DislikeIcon /></div>
                </div>
                <div className={styles.iconContainer}>
                    <div><BookmarkIcon /></div>
                    <div><MoreIcon /></div>
                </div>
            </div>
        </div>
    )
}
export default Card