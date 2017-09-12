import React, { Component } from 'react';

class ConvexHull extends Component {

  handleClick() {
    this.props.calculateConvexHull();
  }

  render() {
    return (
      <div className="">
        <button onClick={this.handleClick.bind(this)}>Find Convex Hull</button>
      </div>
    );
  }
}

export default ConvexHull;
