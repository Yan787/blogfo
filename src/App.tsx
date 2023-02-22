import React from 'react';

import Title from './components/Title';
import UserName from "./components/UserName";
import Button from "./components/Buttom"
import { ButtonType } from "./components/Buttom/Button";
import BurgerMenu from "./components/BurgerMenu";
import Tabs from './components/Tabs';
const App = () => {
  return (
        <div>

          <Button type={ButtonType.Primary} title={`Primary`} onClick={()=> {}}/>
          <Button type={ButtonType.Secondary} title={`Secondary`} onClick={()=> {}}/>
          <Button type={ButtonType.Errer} title={`Errer`} onClick={()=> {}}/>

          <UserName UserName={`Bob Lapuch`}/>
          <Title title={`Blog`} />
          <Tabs />
          <BurgerMenu />

        </div>
  );
}

export default App;
