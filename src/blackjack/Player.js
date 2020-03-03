import Card from './Card';

class Player {
    constructor(name) {
        this.name = name;
        this.hands = [
            ['KS', '4S', '3C', '2H'],
            //['AD', 'QH']
        ];
    }

    getPlayerName() {
        return this.name;
    }

    getAllPlayerHands() {
        return this.hands;
    }

    getPlayerHand(index) {
        return this.hands[index];
    }

    receiveCard(handIdx, card) {
        this.hands[handIdx].push(card);
    }
}

export default Player;