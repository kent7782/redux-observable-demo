import React, { Component } from 'react';

import UserItem from './UserItem';
import { fetchUser, cancelFetchUser } from '../actions/userActions';

class User extends Component {

  handleFetchUser() {
    this.props.dispatch(fetchUser());
  }

  handleCancel() {
    this.props.dispatch(cancelFetchUser());
  }

  render() {
    var message = '';
    if (this.props.user.fetching) {
      message = 'fetching...';
    } else if (this.props.user.fetched) {
      message = 'fetched.';
    } else if (this.props.user.canceled) {
      message = 'canceled.';
    }

    var userItems = this.props.user.users.map(user => {
        return <UserItem user={user} key={user.id} />;
    });

    return (
      <div id="user-container" className="container">
        <h2>AJAX with Observable</h2>
        <button onClick={this.handleFetchUser.bind(this)}>Fetch User</button>
        <button onClick={this.handleCancel.bind(this)}>Cancel Request</button>
        <p className="message">{message}</p>
        <div id="user-list">{userItems}</div>
      </div>
    );
  }
}

export default User;
