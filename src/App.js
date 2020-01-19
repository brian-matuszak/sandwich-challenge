import React from 'react';
import sandwich from './sandwich.png';
import './App.css';
import { SandwichContents } from './SandwichContents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sandwich} className="App-logo" alt="logo" />
        <h2 className={"App-title"}>
          The Sandwich Challenge
        </h2>
        <SandwichContents/>
      </header>
    </div>
  );
}

export default App;
