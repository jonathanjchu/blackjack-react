import React, { Component } from 'react';
import './App.css';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Player from './components/Player';
import Dealer from './components/Dealer';
import Blackjack from './blackjack/Blackjack';

class App extends Component {
  constructor(props) {
    super(props);

    var blackjack = new Blackjack();

    this.state = {
      dealer: [],
      player: blackjack.GetPlayerHands()
    };
  }

  onPlayerHit = (e) => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App">
            <header className="App-header">
              <Dealer />
              <Player hands={this.state.player} />
            </header>
          </div>
        </header>
      </div>
    );
  }
}

export default App;