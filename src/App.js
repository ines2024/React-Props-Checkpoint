import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from './Component/PlayersList';

function App() {
  return (
    <div className="App">
    <h1> Real Madrid Players </h1>
      <PlayersList/>
    </div>
  );
}
export default App;
