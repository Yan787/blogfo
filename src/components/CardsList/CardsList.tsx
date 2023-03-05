import React, {FC} from "react";
import { CardSize, CardType } from "../Card/types";
import Card from "../Card";
import styles from "./CardsList.module.scss";

type CardsListProps = {
    cardsList: CardType[]
}

const CardsList:FC<CardsListProps> = ({cardsList}) => {
    return (
        <div className={styles.container}>
            <div>
                <Card Card={cardsList[0]} Size={CardSize.Large} />
                <div className={styles.mediumContainer}>
                    {cardsList.map((item, index)=> {
                        if(index > 0 && index < 5) {
                            return <Card Card={item} key={item.id} Size={CardSize.Medium} />
                        }
                    })}
                </div>
            </div>
            <div className={styles.reghSideContainer}>
                {cardsList.map((item, index)=> {
                    if(index > 5) {
                        return <Card Card={item} key={item.id} Size={CardSize.Small} />
                    }
                })}
            </div>
        </div>
    )
}
export default CardsList