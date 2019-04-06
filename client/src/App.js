import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import SignUp from './signup/SignUp';
import SignIn from './signin/SignIn';
import Users from './users/Users';

import './App.css';

class App extends Component {

  signout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/signin');
  };

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
            &nbsp; | &nbsp;
            <button onClick={this.signout}>Sign Out</button>
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

export default withRouter(App);
