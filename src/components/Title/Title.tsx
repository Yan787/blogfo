import React, {FC} from "react";

import styles from "./Title.module.css";

type TitleProps = {
    title: string,
}
const Title: FC<TitleProps> = ({title}) => {
    return (
        <h1 className={styles.h1}>{title}</h1>
    )
}


export default Title



