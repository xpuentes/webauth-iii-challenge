import React from 'react';
import axios from 'axios';

class Users extends React.Component {
  state = {
    users: []
  }

  componentDidMount(){
    const headers = {
      authorization: localStorage.getItem('jwt')
    };
    const endpoint = 'http://localhost:9090/api/users/';
    axios.get(endpoint, { headers })
         .then(res => {
           console.log(res.data);
           this.setState({users: res.data});
         })
         .catch(err => {
           console.log(err);
         });
  }

  render() {
    return (
      <>
        <h2>Users</h2>
        <ul>
          {this.state.users.map(u =>
            <li key={u.id}>{u.username}</li>
          )}
        </ul>
      </>
    );
  }
}

export default Users;
