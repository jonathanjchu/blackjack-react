import React, { Component } from 'react';
import '../App.css';

class HandControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canHit: true,
      canStay: true,
      canDouble: true,
      canSurrender: true,
      canSplit: true
    }
  }

  onHit = (e) => {
    this.props.onHit(e);
  }

  render() {
    return (
      <div>
        <button className="controlButton" onClick={this.onHit}>
          Hit
        </button>
        <button className="controlButton">
          Stay
        </button>
        <button className="controlButton">
          Double
        </button>
        <button className="controlButton">
          Surrender
        </button>
        <button className="controlButton">
          Split
        </button>
      </div>
    );
  }
}

export default HandControl;