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
    var cancelDisabled = true;
    var message = '';
    if (this.props.user.fetching) {
      message = 'fetching...';
      cancelDisabled = false;
    } else if (this.props.user.fetched) {
      cancelDisabled = true;
      message = 'fetched.';
    }

    var userItems = this.props.user.users.map(user => {
        return <UserItem user={user} key={user.id} />;
    });

    return (
      <div id="user-container" className="container">
        <h2>AJAX with Observable</h2>
        <button onClick={this.handleFetchUser.bind(this)}>Fetch User</button>
        <button onClick={this.handleCancel.bind(this)} disabled={cancelDisabled}>Cancel Request</button>
        <p className="message">{message}</p>
        <div id="user-list">{userItems}</div>
      </div>
    );
  }
}

export default User;
