import React from 'react';
import CardView from "./CardView/CardView";
import './cards.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="playingCards faceImages">
        <CardView rank="J" suit="spades"/>
      </div>
    </div>
  );
}

export default App;
