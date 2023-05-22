import Card from "./Card";

class CardDeck {
    private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private readonly suits = ['diams', 'hearts', 'spades', 'clubs'];
    public deck: Card[] = [];
    constructor() {
        this.suits.forEach(suit =>{
            this.ranks.forEach(rank => {
                const card = new Card(rank, suit);
                this.deck.push(card);
            });
        });
    }

    getCard(): Card {
        const rand = Math.floor(Math.random() * this.deck.length);
        const randomCard = this.deck[rand];
        this.deck.splice(rand, 1);
        return randomCard;
    }

    getCards(howMany: number): Card[] {
        const arr: Card[] = [];
        for(let i = 0; i < howMany; i++) {
            arr.push(this.getCard());
        }

        return arr;
    }
}

export default CardDeck;