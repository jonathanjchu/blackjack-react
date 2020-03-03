import React, { Component } from 'react';
import '../App.css';
import CardHand from './CardHand';
import HandControl from './HandControl';
import Wager from './Wager';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {    
      balance: 100,
    };
  }

  onHit = (e) => {
    this.props.onHit(e);
  }

  render() {
    return (
      <div>
        {
          this.props.hands.map((hand, i) =>
            <>
              <CardHand cards={ hand } key={i} />  
              <HandControl onHit={this.onHit}
                          onStay={this.onStay}
                          onSurrender={this.onSurrender}
                          onSplit={this.onSplit}
                          onDouble={this.onDouble} />
            </>
          )
        }
        
        <h3>
          ${ this.state.balance }
        </h3>
        
        <Wager balance={this.state.balance} />
      </div>
    );
  }
}

export default Player;