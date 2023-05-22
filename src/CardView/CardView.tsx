import React from "react";
import './../cards.css';

interface CardViewProps {
    rank: string;
    suit: string;
}

const CardView: React.FC<CardViewProps> = props => {
    const cardClass = `card rank-${props.rank.toLowerCase()} ${props.suit}`;

    let suit;
    
    if(props.suit === 'diams') {
        suit = '♦';
    } else if (props.suit === 'hearts') {
        suit = '♥';
    } else if (props.suit === 'clubs') {
        suit = '♣';
    } else if (props.suit === 'spades') {
        suit = '♠';
    }

    return(
        <span className={cardClass}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{suit}</span>
        </span>
    )
};

export default CardView;
