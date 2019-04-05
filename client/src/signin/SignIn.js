import React from 'react';
import axios from 'axios';

class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const endpoint = 'http://localhost:9090/api/auth/login';

    axios.post(endpoint, this.state)
         .then(res => {
           localStorage.setItem('jwt', res.data.token);
           this.props.history.push('/users');
         })
         .catch(err => {
           console.log(err);
         });
  }

  render() {
    return (
      <>
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name = 'username'
            id = 'username'
            placeholder = 'Username'
            value = {this.state.username}
            onChange = {this.handleInputChange}
            type = 'text'
          />
          <input
            name = 'password'
            id = 'password'
            placeholder = 'Password'
            value = {this.state.password}
            onChange = {this.handleInputChange}
            type = 'password'
          />
          <button type='submit'>Sign In</button>
        </form>
      </>
    );
  }
}

export default SignIn;
