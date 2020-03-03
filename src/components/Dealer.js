import React, { Component } from 'react';
import '../App.css';
import CardHand from './CardHand';

class Dealer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      isShowingCards: false
    };
  }

  render() {
    return (
      <div>
        <CardHand cards={['QC', 'Blue_Back']} />
      </div>
    );
  }
}

export default Dealer;