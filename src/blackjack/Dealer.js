class Dealer {
    constructor() {
        this.hand = [];
    }

    receiveCard(card) {
        this.hand.push(card);
    }

    
}

export default Dealer;