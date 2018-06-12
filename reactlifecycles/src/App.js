import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './containers/Home';
import Posts from './containers/Posts';
import Profiles from './containers/Profiles';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profiles">Profiles</Link>
          </header>
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={Posts} />
          <Route path='/profiles' component={Profiles} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
