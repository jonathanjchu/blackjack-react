import React, { Component } from 'react';
import '../App.css';

class HandControl extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <button>
          Hit
        </button>
        <button>
          Stay
        </button>
        <button>
          Surrender
        </button>
        <button>
          Split
        </button>
      </div>
    );
  }
}

export default HandControl;