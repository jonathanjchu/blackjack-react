class Dealer {
    constructor() {
        this.hand = [];
        
    }

    receiveCard(card) {
        this.hand.push(card);
    }

    discardCards() {
        this.hand = [];
    }

    getDealerHand() {
        return this.hand;
    }

    
}

export default Dealer;