import React, { Component } from 'react';
import '../App.css';

class CardHand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: this.props.cards
      // cards: [ 'AS', 'KS', 'QS', '10H' ]
    };

  }

  render() {
    return (
      <div>
        <div class="hand">
          {
            this.state.cards.map((card, i) =>
              <img className="card" src={"./cards/" + card + ".svg"} alt={card} key={i} />
            )
          }
        </div>
      </div>
    );
  }
}

export default CardHand;