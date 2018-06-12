import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
  render() {
   const ids = [
      {id: 1, name: 'Post 1'},
      {id: 2, name: 'Post 2'},
      {id: 3, name: 'Post 3'},
      {id: 4, name: 'Post 4'}
    ];
  
   const list = ids.map(item => {
      return (
        <span key={item.id}>
          <Link to={`${this.props.match.url}/${item.id}`}>{item.name}</Link>
        </span>
      )
    });
    return (
      <div className="Posts">
        {/* <Link to={`${this.props.match.url}/1`}>Post 1</Link>
        <Link to={`${this.props.match.url}/2`}>Post 2</Link>
        <Link to={`${this.props.match.url}/3`}>Post 3</Link>
        <Link to={`${this.props.match.url}/4`}>Post 4</Link> */}
        {list}
      </div>
    );
  }
}

export default Posts;
