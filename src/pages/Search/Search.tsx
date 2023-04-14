import React from "react";

import { useSelector } from "react-redux";
import SearchCardList from "../../components/SearchCardList";
import Title from "../../components/Title";
import { PostSelectors } from "../../redux/reducers/postSlice";
import SelectedPostModal from "../Home/SelectedPostModal";

const Search = () => {
  const cerchValue = useSelector(PostSelectors.getSearchedValue);
  const cardList = useSelector(PostSelectors.getSearchedPost);
  return (
    <div>
      <Title title={cerchValue} />
      <SearchCardList cardsList={cardList} />
      <SelectedPostModal />
    </div>
  );
};

export default Search;
