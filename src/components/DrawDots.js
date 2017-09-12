import React, { Component } from 'react';

class DrawDots extends Component {

  handleClick() {
    this.props.generateDots(this.refs.num.value);
  }

  render() {

    return (
      <div className="">
        <input type="text" ref="num" type="number" min="3" placeholder="Enter a number..." /> <br />
        <button onClick={this.handleClick.bind(this)}>Generate New Dots</button>
      </div>
    );
  }
}

export default DrawDots;
