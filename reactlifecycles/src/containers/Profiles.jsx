import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Profiles extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Profiles">
        <h3>Profile</h3>
        <Link to={`${this.props.match.url}/posts`}>/profile/posts</Link>
      </div>
    );
  }
}

export default Profiles;
