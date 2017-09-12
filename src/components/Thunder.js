import React, { Component } from 'react';

import { shout } from '../actions/thunderActions';


class Thunder extends Component {

  handleClick() {
    this.props.dispatch(shout());
  }

  render() {
    var disabled = false;
    if (this.props.thunder.code !== '...') {
      disabled = true;
    }

    return (
      <div id="thunder-container" className="container">
        <h1>React + Redux + RxJS Demo</h1>
        <button onClick={this.handleClick.bind(this)} disabled={disabled}>Shout Thunder</button>
        <p id="code">{this.props.thunder.code}</p>
      </div>
    );
  }
}

export default Thunder;
