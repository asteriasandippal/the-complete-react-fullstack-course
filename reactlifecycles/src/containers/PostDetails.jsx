import React, { Component } from 'react';

class PostsDetails extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="PostsDetails">
        <h3>{this.props.match.params.id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos, expedita ipsum pariatur iusto assumenda quaerat! Debitis in dolore commodi delectus? Vitae sed numquam blanditiis hic nihil alias natus eligendi?</p>
      </div>
    );
  }
}

export default PostsDetails;
