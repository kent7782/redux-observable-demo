import React, { Component } from 'react';
import { connect } from 'react-redux';

import Graph from './Graph';
import Thunder from './Thunder';
import User from './User';

class App extends React.Component {

  render() {
    return (
      <div id="app-container" className="container">
        <Graph graph={this.props.graph} dispatch={this.props.dispatch} />
        <div id="left-container">
          <Thunder thunder={this.props.thunder} dispatch={this.props.dispatch}  />
          <hr />
          <User user={this.props.user} dispatch={this.props.dispatch} />
          <hr />
        </div>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    thunder: store.thunder,
    user: store.user,
    graph: store.graph,
  };
})(App);
