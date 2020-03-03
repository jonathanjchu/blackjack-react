import Card from './Card';
import Deck from './Deck';
import Player from './Player';
import PlayerHand from './PlayerHand';
import Dealer from './Dealer';

class Blackjack {
    constructor() {
        this.dealer = new Dealer();
        this.players = [];
        this.deck = new Deck(6);
        this.deck.shuffle();

        this.addNewPlayer("test");
    }

    startNewRound() {
        if (this.deck.getNumOfRemainingCards() < 218) {
            this.deck.reset();
            this.deck.shuffle();
        }

        this.players[0].discardAllHands();
        this.dealer.discardCards();


        for (let i = 0; i < this.players.length; i++) {
            let card = this.deck.dealCard();
            this.players[i].receiveCard(0, card);

            card = this.deck.dealCard();
            this.players[i].receiveCard(0, card);
        }

        this.dealer.receiveCard(this.deck.dealCard());
        this.dealer.receiveCard(this.deck.dealCard());


        ///
        let total = this.players[0].getBlackjackValueOfHand(0);
        console.log(`total: ${total}`);
    }

    addNewPlayer(name) {
        this.players.push(new Player(name));
    }

    getDealerHand() {
        return this.dealer.getDealerHand();
    }

    getDealerHandText() {
        let dealerHand = this.dealer.getDealerHand();
        let outputHand = [];
        for (let i = 0; i < dealerHand.length; i++) {
            outputHand.push({ Suit: dealerHand[i].suit, Value: dealerHand[i].strValue });
        }
        return outputHand;
    }

    getPlayerHands(idx) {
        return this.players[idx].getAllHands();
    }

    getPlayerHandsText(idx) {
        let hands = this.players[idx].getAllHands();
        let handsText = [];

        for (let i = 0; i < hands.length; i++) {
            let h = [];
            for (let j = 0; j < hands[i].hand.length; j++) {
                h.push({ Suit: hands[i].hand[j].suit, Value: hands[i].hand[j].strValue });
            }
            handsText.push(h);
        }

        return handsText;
    }

    dealerPlay() {

    }

    playerHit(playerIndex, handIndex) {
        let card = this.deck.dealCard();
        this.players[playerIndex].receiveCard(handIndex, card);

        let total = this.players[playerIndex].getBlackjackValueOfHand(handIndex);

        console.log(`total: ${total}`);
        
        if (total > 21) {

        }
        
    }
}

export default Blackjack;