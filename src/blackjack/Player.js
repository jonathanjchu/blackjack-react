import Card from './Card';
import PlayerHand from './PlayerHand';

class Player {
    constructor(name) {
        this.name = name;
        this.hands = [
            new PlayerHand()
        ];
        this.balance = 100;
    }

    discardAllHands() {
        this.hands = [ new PlayerHand() ];
    }

    getPlayerName() {
        return this.name;
    }

    getAllHands() {
        return this.hands;
    }

    getPlayerHand(index) {
        return this.hands[index];
    }

    receiveCard(handIndex, card) {
        this.hands[handIndex].receiveDealtCard(card);
    }

    getBlackjackValueOfHand(handIndex) {
        return this.hands[handIndex].getBlackJackValue();
    }
}

export default Player;