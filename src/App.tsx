import React from 'react';

import Title from './components/Title';
import UserName from "./components/UserName";
import Button from "./components/Buttom"
import { ButtonType } from "./components/Buttom/Button";
import BurgerMenu from "./components/BurgerMenu";
import Tabs from './components/Tabs';
import Card from './components/Card';
import { CardSize } from './components/Card/types';
import Imput from "./components/Input";

const MOCK_CARD = {
  id: 0,
  image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  text: `Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.`,
  date: `April 20, 2021`,
  lesson_num: 12,
  title: `Astronauts prep for new solar arrays on nearly seven-hour spacewalk`,
  description: 'описани поста',
  author: 10,
}

const App = () => {
  return (
        <div>
{/* 
          <Button type={ButtonType.Primary} title={`Primary`} onClick={()=> {}}/>
          <Button type={ButtonType.Secondary} title={`Secondary`} onClick={()=> {}}/>
          <Button type={ButtonType.Errer} title={`Errer`} onClick={()=> {}}/>

          <UserName UserName={`Bob Lapuch`}/>
          <Title title={`Blog`} />
          <Tabs />
          <BurgerMenu /> */}
          <Card Card={MOCK_CARD} Size={CardSize.Large}/>
          <Card Card={MOCK_CARD} Size={CardSize.Medium}/>
          <Card Card={MOCK_CARD} Size={CardSize.Small}/>
          <Imput title={`Title`} placeholder={`placeholder`}/>
          <Imput title={`Title`} disabled placeholder={`placeholder`}/>
          <Imput title={`Title`} errorText placeholder={`placeholder`}/>
        </div>
  );
}

export default App;
