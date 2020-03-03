import React, { Component } from 'react';
import '../App.css';

class CardHand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: this.props.cards
    };

  }

  render() {

    return (
      <div>
        <div className="hand">
          {
            this.props.cards.map((card, i) =>
              <img className="card" src={"./cards/" + card.Value + card.Suit + ".svg"} alt={card} key={i} />
            )
          }
        </div>
      </div>
    );
  }
}

export default CardHand;