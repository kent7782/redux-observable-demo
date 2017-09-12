import React, { Component } from 'react';
import * as d3 from 'd3';

class Graph extends Component {
  drawDots() {
    d3.select('#svg-container').selectAll('*').remove();

    var outerWidth = 600;
    var outerHeight = 600;
    var circleRadius = 5;

    var svg = d3.select('#svg-container').append('svg')
        .attr('width', outerWidth)
        .attr('height', outerHeight)
        .append('g')
        .attr('id', 'group')
        .attr('transform', 'translate(25, 25)');

    var dots = svg.selectAll('circle')
        .data(this.props.graph.points)
        .enter()
        .append('circle');

    var dotAttributes = dots.attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('r', circleRadius)
        .style('fill', '#009688');

    dots.exit().remove();
  }


  drawLine(dot1, dot2) {
    var line = d3.select('#group')
        .append('line')
        .attr('x1', dot1.x)
        .attr('y1', dot1.y)
        .attr('x2', dot2.x)
        .attr('y2', dot2.y)
        .style('stroke', '#004D40')
        .style('stroke-width', 2);
  }

  drawConvexHull(hull) {
    for (let i = 0; i < hull.length; i++) {
      if (i === hull.length - 1) {
        this.drawLine(hull[i], hull[0]);
      } else {
        this.drawLine(hull[i], hull[i + 1]);
      }
    }
  }

  componentDidUpdate() {
    if (this.props.graph.points) {
      this.drawDots();
    }

    if (this.props.graph.hull) {
      this.drawConvexHull(this.props.graph.hull)
    }
  }

  render() {
    return (
      <div id="svg-container" className="">
        <svg id="svg" width="550" height="550">
          <g id="group"></g>
        </svg>
      </div>
    );
  }
}

export default Graph;
