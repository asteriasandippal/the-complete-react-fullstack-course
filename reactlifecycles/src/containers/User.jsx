import React, { Component } from 'react';
import UserHoc from '../hoc/UserHoc';

class User extends Component {
  render() {
      console.log(this.props);
    return (
      <div className="User">
        <h3>User</h3>

      </div>
    );
  }
}

export default UserHoc(User, 'hello');
