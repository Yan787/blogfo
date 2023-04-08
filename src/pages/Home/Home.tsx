import React, { useEffect, useState } from "react";

import Title from "../../components/Title";
import Tabs from "../../components/Tabs";
import CardsList from "../../components/CardsList";
import SelectedPostModal from "./SelectedPostModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getMyPost,
  PostSelectors,
} from "../../redux/reducers/postSlice";
import { TabsNames } from "../../utils/@globalTypes";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const [activeTab, setActivTab] = useState(TabsNames.All);
  const onTabClick = (key: TabsNames) => () => setActivTab(key);

  const postsList = useSelector(PostSelectors.getAllPosts);
  const favouriteList = useSelector(PostSelectors.getLikedPost);
  const myPosts = useSelector(PostSelectors.getMyPost);
  const favourites = useSelector(PostSelectors.getBookmarkStatus);

  const getCurrentList = () => {
    switch (activeTab) {
      case TabsNames.Popular:
        return favouriteList;
      case TabsNames.MyPosts:
        return myPosts;
      case TabsNames.Favourites:
        return favourites;
      case TabsNames.All:
      default:
        return postsList;
    }
  };

  return (
    <div>
      <Title title={"Blog"} />
      <Tabs activeTab={activeTab} onTabClick={onTabClick} />
      <CardsList cardsList={getCurrentList()} />
      <SelectedPostModal />
    </div>
  );
};
export default Home;
