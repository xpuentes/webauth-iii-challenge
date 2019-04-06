import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    department: ''
  }

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const endpoint = 'http://localhost:9090/api/auth/register';

    axios.post(endpoint, this.state)
         .then(res => {
           console.log(res);
         })
         .catch(err => {
           console.log(err);
         });

    this.props.history.push('/signin');
  }

  render() {
    return (
      <>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name = 'department'
            id = 'department'
            placeholder = 'Department'
            value = {this.state.department}
            onChange = {this.handleInputChange}
            type = 'text'
          />
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
          <button type='submit'>Sign Up</button>
        </form>
      </>
    );
  }
}

export default SignUp;
