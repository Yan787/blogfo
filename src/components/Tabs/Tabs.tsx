import React, { FC } from "react";
import classNames from "classnames";

import { TabsNames, TabsType } from "./types";
import styles from "./Tabs.module.scss";
import { useThemeContext } from "../../context/Theme/Context";
import { Theme } from "../../context/Theme/Context";

type TabsProps = {
  tabsList: TabsType[];
  onTabClick: (key: TabsNames) => () => void;
  activeTab: number;
};

const Tabs: FC<TabsProps> = ({ tabsList, activeTab, onTabClick }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.continer, {
        [styles.darkContiner]: theme === Theme.Dark,
      })}
    >
      {tabsList.map((tab) => {
        return (
          <div
            key={tab.key}
            className={classNames(styles.tab, {
              [styles.activeTab]: activeTab === tab.key,
              [styles.disabled]: tab.disabled,
            })}
            onClick={tab.disabled ? undefined : onTabClick(tab.key)}
          >
            {tab.title}
          </div>
        );
      })}
    </div>
  );
};
export default Tabs;
