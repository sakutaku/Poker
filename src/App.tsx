import React, {useState} from 'react';
import CardView from "./CardView/CardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import './cards.css';
import './App.css';


const App = () => {
    const [cards, setCards] = useState<Card[]>([]);

    const getCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards(5);
        console.log(newCards);
        setCards(newCards);
    };

    if(cards.length === 0) {
        return (
            <div className="App">
                <button onClick={getCards} className="btn">Раздать карты</button>
            </div>
        );
    } else {
        return (
            <div className="App">
                <div className="playingCards faceImages">
                    <CardView rank={cards[0].rank} suit={cards[0].suit}/>
                    <CardView rank={cards[1].rank} suit={cards[1].suit}/>
                    <CardView rank={cards[2].rank} suit={cards[2].suit}/>
                    <CardView rank={cards[3].rank} suit={cards[3].suit}/>
                    <CardView rank={cards[4].rank} suit={cards[4].suit}/>
                </div>
                <button onClick={getCards} className="btn">Раздать карты</button>
            </div>
        );
    }
}

export default App;
