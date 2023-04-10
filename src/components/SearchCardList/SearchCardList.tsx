import React, { FC } from "react";

import { CardListType, CardSize } from "../../utils/@globalTypes";
import Card from "../Card";
import EmptyState from "../EmptyState";

type CardsListProps = {
  cardsList: CardListType;
};

const SearchCardList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList.length > 0 ? (
    <div className={styles.container}>
      {cardsList.map((item, index) => {
        return <Card card={item} key={item.id} size={CardSize.Small} />;
      })}
    </div>
  ) : (
    <EmptyState
      title="Sorry, there's no posts"
      description="Try to check out another category"
    />
  );
};
export default SearchCardList;
