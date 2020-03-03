import React, { Component } from 'react';
import '../App.css';
import CardHand from './CardHand';

class Dealer extends Component {
  render() {
    return (
      <div>
        {
          this.props.isShowingCards
          ?
          <CardHand cards={this.props.cards} />
          :
          <>
            <img className="card" src={"./cards/" + this.props.cards[0].Value + this.props.cards[0].Suit + ".svg"} alt={"card"} />
            <img className="card" src={"./cards/Blue_Back.svg"} alt="card back" />
          </>
        }
      </div>
    );
  }
}

export default Dealer;