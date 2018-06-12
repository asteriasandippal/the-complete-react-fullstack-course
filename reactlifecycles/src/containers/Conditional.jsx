import React, { Component } from 'react';

class Conditional extends Component {
  render() {
    const value = true;
    const returnValue = () => {
        return true;
    }
    const showIt = () => {
        return (
            returnValue() ? 
            <div>
                Hello, It's True
            </div>
        :
            <div>
                Hello, It's False
            </div>
        );
    }
    return (
      <div className="Conditional">
        <h3>{this.props.match.url}</h3>
        {showIt()}
      </div>
    );
  }
}

export default Conditional;