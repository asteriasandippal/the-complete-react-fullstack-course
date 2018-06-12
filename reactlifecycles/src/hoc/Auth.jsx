import React, { Component } from 'react';

class Auth extends Component {
  render() {
    const password = '12345a';
    
    if(password !== '12345') {
        return <h3>You are not Authorized!</h3>
    } else {
        return this.props.children
    }
      
  }
}

export default Auth;