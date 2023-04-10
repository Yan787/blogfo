import React from "react";
import { useSelector } from "react-redux";
import CardsList from "../../components/CardsList";
import Title from "../../components/Title";
import { PostSelectors } from "../../redux/reducers/postSlice";

const Search = () => {
  const cerchValue = useSelector(PostSelectors.getSearchedValue);
  return (
    <div>
      <Title title={cerchValue} />
      <CardsList cardsList={[]} />
    </div>
  );
};

export default Search;
