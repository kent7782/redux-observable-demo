import React, { Component } from 'react';

class UserItem extends Component {

  render() {
    return (
      <div className="">
        <h4>{this.props.user.name}</h4>
        <p>Username: {this.props.user.username}</p>
        <p>Email: {this.props.user.email}</p>
        <hr />
      </div>
    );
  }
}

export default UserItem;
