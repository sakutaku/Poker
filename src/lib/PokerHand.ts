import Card from "./Card";


class PokerHand {
    public deck: Card[] = [];
    constructor(deck: Card[]) {
        this.deck = deck;
    }
    getOutcome() {
        // console.log(this.deck);

        let foundPairs: Card[] = [];
        let similarSuits: Card[] = [];

        for(let i = 0; i < this.deck.length; i++) {
            for(let j = 0; j < this.deck.length; j++) {
                if (i === j) continue;
                if(this.deck[j].rank === this.deck[i].rank) {
                    foundPairs.push(this.deck[j]);
                }
                if(this.deck[j].suit === this.deck[i].suit) {
                    similarSuits.push(this.deck[j]);
                }
            }
        }

        if(foundPairs.length === 2) {
            return '1 pair';
        } else if(foundPairs.length === 4) {
            return '2 pairs';
        } else if(foundPairs.length === 6) {
            return '3 pairs';
        } else if(similarSuits.length === 20) {
            return 'Flash!'
        } else if(foundPairs.length === 12) {
            return 'Four of a kind'
        }
    }
}

export default PokerHand;