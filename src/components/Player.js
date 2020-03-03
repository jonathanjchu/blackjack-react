import React, { Component } from 'react';
import '../App.css';
import CardHand from './CardHand';
import HandControl from './HandControl';
import Wager from './Wager';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hands: this.props.hands,
      balance: 0,
    };
  }

  render() {
    return (
      <div>
        {
          this.state.hands.map((hand, i) =>
            <>
              <CardHand cards={ hand } key={i} />  
              <HandControl />
            </>
          )
        }
        
        <h3>
          ${ this.state.balance }
        </h3>
        
        <Wager />
      </div>
    );
  }
}

export default Player;