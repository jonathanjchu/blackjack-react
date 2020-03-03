import React, { Component } from 'react';
import './App.css';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Player from './components/Player';
import Dealer from './components/Dealer';
import Blackjack from './blackjack/Blackjack';

var blackjack = new Blackjack();

class App extends Component {
  constructor(props) {
    super(props);

    blackjack.startNewRound();

    this.state = {
      playerHands: blackjack.getPlayerHandsText(0),
      dealerHand: blackjack.getDealerHandText(),
      // playerHands: [
      //   []
      // ],
      // dealerHand: [],
      isStarted: false

    }

  }

  dealNewCards = (e) => {
    e.preventDefault();

    blackjack.startNewRound();

    
    this.updateCardsOnTable();
  }

  updateCardsOnTable() {
    let playerHands = blackjack.getPlayerHandsText(0);
    let dealerHand = blackjack.getDealerHandText();

    this.setState({
      playerHands: playerHands,
      dealerHand: dealerHand
    });
  }

  onPlayerHit = (e) => {
    blackjack.playerHit(0, 0);

    this.updateCardsOnTable();
  }

  onPlayerStay = (e) => {

  }

  onPlayerSurrender = (e) => {

  }

  onPlayerSplit = (e) => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App">
            <header className="App-header">
              {
                this.state.isStarted ?
                  <>
                  </>
                  :
                  <button className="controlButton" onClick={this.dealNewCards}>
                    Deal
                  </button>
              }

              <Dealer cards={this.state.dealerHand} isShowingCards={false} />
              <Player hands={this.state.playerHands}
                onHit={this.onPlayerHit}
                onStay={this.onPlayerStay}
                onSurrender={this.onPlayerSurrender}
                onSplit={this.onPlayerSplit} />
            </header>
          </div>
        </header>
      </div>
    );
  }
}


export default App;