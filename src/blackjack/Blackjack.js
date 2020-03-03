import Card from './Card';
import Deck from './Deck';
import Player from './Player';
import Dealer from './Dealer';

class Blackjack {
    constructor() {
        this.dealer = new Dealer();
        this.player = new Player();
    }

    GetDealerHand() {
        
    }

    GetPlayerHands() {
        return this.player.getAllPlayerHands();
    }
}

export default Blackjack;