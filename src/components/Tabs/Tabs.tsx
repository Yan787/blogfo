import React, {FC} from "react";
import classNames from "classnames";

import { TabsNames, TabsType } from "./types";
import styles from "./Tabs.module.scss";

type TabsProps = {
    tabsList: TabsType[];
    onTabClick: (key: TabsNames) => ()=> void;
    activeTab: number;
}

const Tabs:FC<TabsProps> = ({tabsList, activeTab, onTabClick}) => {

    return (
        <div className={styles.continer}>{tabsList.map(tab=> {
            return <div key={tab.key} className={classNames(styles.tab, {
                [styles.activeTab]: activeTab === tab.key,
                [styles.disabled]: tab.disabled
            })}
            onClick={tab.disabled ? undefined : onTabClick(tab.key)}
            >{tab.title}</div>
        })}</div>
    )
}
export default Tabs