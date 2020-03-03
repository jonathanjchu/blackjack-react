import React, { Component } from 'react';
import '../App.css';

class Wager extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      wager: 5,
      maxWager: this.props.balance
    };
  }

  onWagerChange = (e) => {
    e.preventDefault();

    if (e.target.value >= 5 && e.target.value <= this.state.maxWager) {
      this.setState({ wager: e.target.value });
    }
  }

  render() {
    return (
      <div>
        Bet: $<input type="number"
                    name="wager"
                    value={this.state.wager}
                    className="text"
                    onChange={this.onWagerChange} />
      </div>
    );
  }
}

export default Wager;