import Card from './Card';

class PlayerHand {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.isIn = true;
    }

    receiveDealtCard(card) {
        if (card instanceof Card)
            this.hand.push(card);
        else
            console.log("received invalid object " + card);
    }

    discardCard(card) {
        for (let i=0; i<this.hand.length; i++) {
            if (this.hand[i] == card)
                this.hand.splice(i);
        }
    }

    discardRandomCard() {
        let rnd = Math.floor(Math.random() * this.hand.length);
        let card = this.hand.splice(rnd);
        return card;
    }

    discardTopCard() {
        return this.hand.pop();
    }

    showHand() {
        this.hand.forEach(function(card) {
            card.show();
        });
    }

    discardHand() {
        this.hand = [];
    }

    getBlackJackValue() {
        let totalVal = 0;
        let countAces = 0;

        // total up player's cards
        for (let i = 0; i < this.getHandSize(); i++) {

            let card = this.getCardInHand(i);

            if (card.getValue() === 1) {
                countAces++;
                totalVal += 11;
            }
            else if (card.getValue() > 10) {
                totalVal += 10;
            }
            else {
                totalVal += card.getValue();
            }
        }

        // handle aces
        while (countAces > 0 && totalVal > 21) {
            totalVal -= 10;
            countAces--;
        }

        return totalVal;
    }


    getCardInHand(idx) {
        return this.hand[idx];
    }

    getHandSize() {
        return this.hand.length;
    }

    getIsIn() {
        return this.isIn;
    }

    setIsIn(val) {
        if (typeof val === "boolean")
            this.isIn = val;
    }
}

export default PlayerHand;