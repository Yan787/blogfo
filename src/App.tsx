import React from 'react';
import './App.css';

import Title from './components/Title';
import UserMenu from "./components/UserMenu"

function App() {
  return (
        <div>
          <UserMenu nameUser={`Bob Lapuch`}/>
          <Title title={`Blog`} />

        </div>
  );
}

export default App;
