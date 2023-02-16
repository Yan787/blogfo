import React, {FC} from "react";
import styles from "./UserName.module.scss"

type UserNameProps = {
    UserName: String
}


const UserName: FC<UserNameProps> = ({UserName}) => {

    const nameUserArr = UserName.split(" ")
    const initials = nameUserArr[0][0] + nameUserArr[1][0]
    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.initials}>{initials}</div>
                <div className={styles.UserName}>{UserName}</div>
            </div>
        </div>
    )
}
export default UserName


