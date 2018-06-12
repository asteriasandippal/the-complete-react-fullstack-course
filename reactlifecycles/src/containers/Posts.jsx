import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
  render() {

    return (
      <div className="Posts">
        <Link to={`${this.props.match.url}/1`}>Post 1</Link>
        <Link to={`${this.props.match.url}/2`}>Post 2</Link>
        <Link to={`${this.props.match.url}/3`}>Post 3</Link>
        <Link to={`${this.props.match.url}/4`}>Post 4</Link>
      </div>
    );
  }
}

export default Posts;
