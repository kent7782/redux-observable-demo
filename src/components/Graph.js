import React, { Component } from 'react';

import DrawDots from './DrawDots';
import ConvexHull from './ConvexHull';
import Svg from './Svg';

import { generatePoints, calculateConvexHull } from '../actions/graphActions';

class Graph extends Component {

  handleGenerateDots(n) {
    this.props.dispatch(generatePoints(n));
  }

  handleCalculateConvexHull() {
    this.props.dispatch(calculateConvexHull(this.props.graph.points));
  }

  render() {
    var message = <p className="message">{this.props.graph.points.length} Dots</p>;
    if (this.props.graph.error) {
      message = <p className="error">{this.props.graph.error}</p>;
    } else if (this.props.graph.hull.length) {
      message = <p className="message">{this.props.graph.points.length} Dots,
        <span> {this.props.graph.hull.length} on Convex Hull</span></p>;
    }

    return (
      <div id="graph-container" className="container">
        <h1>Convex Hull</h1>
        <DrawDots generateDots={this.handleGenerateDots.bind(this)} />
        <ConvexHull calculateConvexHull={this.handleCalculateConvexHull.bind(this)} />
        {message}
        <Svg graph={this.props.graph} />
      </div>
    );
  }
}

export default Graph;
