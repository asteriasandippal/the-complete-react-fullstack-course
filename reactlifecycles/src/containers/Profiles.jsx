import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../hoc/Card';
import Auth from '../hoc/Auth';

class Profiles extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Profiles">
        <Auth>
          <Card>
            <h3>Profile</h3>
            <Link to={`${this.props.match.url}/posts`}>/profile/posts</Link>
          </Card>
        </Auth>
      </div>
    );
  }
}

export default Profiles;
