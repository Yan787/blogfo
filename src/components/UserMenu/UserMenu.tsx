import React, {FC} from "react";
import styles from "./UserMenu.module.css"
type UserMenuProps = {
    nameUser: String
}


const UserMenu: FC<UserMenuProps> = ({nameUser}) => {

    const nameUserArr = nameUser.split(" ")
    const initials = nameUserArr[0][0] + nameUserArr[1][0]
    return (
        <div className={styles.background}>
            <div className={styles.wrapper}>
                <div className={styles.initials}>{initials}</div>
                <div className={styles.nameUser}>{nameUser}</div>
            </div>
        </div>
    )
}
export default UserMenu


