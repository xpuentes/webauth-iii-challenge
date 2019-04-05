import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import SignUp from './signup/SignUp';
import SignIn from './signin/SignIn';
import Users from './users/Users';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <NavLink to='/signup'>Sign Up</NavLink>
            &nbsp; | &nbsp;
            <NavLink to='/signin'>Sign In</NavLink>
            &nbsp; | &nbsp;
            <NavLink to='/users'>Users</NavLink>
          </nav>
        </header>
        <main>
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/users' component={Users} />
        </main>
      </div>
    );
  }
}

export default App;
