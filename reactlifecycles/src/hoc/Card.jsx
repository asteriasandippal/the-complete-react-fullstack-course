import React, { Component } from 'react';

class Card extends Component {
  render() {
    const style = {
        backgroundColor: 'lightGray'
    }
    return (
      <div className="Card" style={style}>
        <h3>Card</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
