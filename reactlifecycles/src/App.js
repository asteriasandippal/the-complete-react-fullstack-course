import React, { Component } from 'react';
import {
  MemoryRouter, 
  HashRouter, 
  BrowserRouter, 
  Route, 
  Link, 
  NavLink, 
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './containers/Home';
import Posts from './containers/Posts';
import PostsDetails from './containers/PostDetails';
import Profiles from './containers/Profiles';
import LifeCycles from './containers/LifeCycles';
import Conditional from './containers/Conditional';
import User from './containers/User';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <NavLink
              exact 
              to="/"
              activeStyle={{color: 'red'}}
              activeClassName="selected"
            >Home</NavLink>
            <NavLink 
              to="/posts"
              activeStyle={{color: 'red'}}
              activeClassName="selected"
            >Posts</NavLink>
            <NavLink 
              to="/profiles"
              activeStyle={{color: 'red'}}
              activeClassName="selected"  
            >Profiles</NavLink>
            <NavLink 
              to="/life"
              activeStyle={{color: 'red'}}
              activeClassName="selected"  
            >Life</NavLink>
            <NavLink 
              to="/conditional"
              activeStyle={{color: 'red'}}
              activeClassName="selected"  
            >Conditional</NavLink>
            <NavLink 
              to="/user"
              activeStyle={{color: 'red'}}
              activeClassName="selected"  
            >User</NavLink>
          </header>
          <Switch>
            {/* <Redirect from="/profiles" to="/"/> */}
            <Route exact path='/' component={Home} />
            <Route exact path='/posts' component={Posts} />
            <Route path='/posts/:id' component={PostsDetails} />
            <Route path='/profiles' component={Profiles} />
            <Route path='/life' component={LifeCycles} />
            <Route path='/conditional' component={Conditional} />
            <Route path='/user' component={User} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
