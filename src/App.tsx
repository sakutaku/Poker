import React from 'react';
import CardView from "./CardView/CardView";
import './cards.css';
import './App.css';
import CardDeck from "./lib/CardDeck";

const App = () => {
    const cardDeck = new CardDeck();

    const deck = cardDeck.deck;
    const newArr = cardDeck.getCards(5);
    console.log(newArr);

    return (
    <div className="App">
      <div className="playingCards faceImages">
        <CardView rank="J" suit="spades"/>
      </div>
    </div>
  );
}

export default App;
