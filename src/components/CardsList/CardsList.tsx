import React, { FC } from "react";
import { CardSize, CardType } from "../Card/types";
import Card from "../Card";
import styles from "./CardsList.module.scss";

type CardsListProps = {
  cardsList: CardType[];
};

const CardsList: FC<CardsListProps> = ({ cardsList }) => {
  return (
    <div className={styles.container}>
      <div>
        <Card card={cardsList[0]} size={CardSize.Large} />
        <div className={styles.mediumContainer}>
          {cardsList.map((item, index) => {
            if (index > 0 && index < 5) {
              return <Card card={item} key={item.id} size={CardSize.Medium} />;
            }
          })}
        </div>
      </div>
      <div className={styles.reghSideContainer}>
        {cardsList.map((item, index) => {
          if (index > 5) {
            return <Card card={item} key={item.id} size={CardSize.Small} />;
          }
        })}
      </div>
    </div>
  );
};
export default CardsList;
