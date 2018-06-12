import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './containers/Home';
import Posts from './containers/Posts';
import PostsDetails from './containers/PostDetails';
import Profiles from './containers/Profiles';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profiles">Profiles</Link>
          </header>
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={Posts} />
          <Route path='/posts/:id' component={PostsDetails} />
          <Route path='/profiles' component={Profiles} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
