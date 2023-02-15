import React from 'react';
import './App.scss';

import Title from './components/Title';
import UserMenu from "./components/UserMenu";
import Button from "./components/Buttom"
import { ButtonType } from "./components/Buttom/Button";

const App = () => {
  return (
        <div>

          <Button type={ButtonType.Primary} title={`Primary`} onClick={()=> {}}/>
          <Button type={ButtonType.Secondary} title={`Secondary`} onClick={()=> {}}/>
          <Button type={ButtonType.Errer} title={`Errer`} onClick={()=> {}}/>

          <UserMenu nameUser={`Bob Lapuch`}/>
          <Title title={`Blog`} />

        </div>
  );
}

export default App;
