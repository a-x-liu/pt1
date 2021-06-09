import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  Link,
  useHistory,
} from 'react-router-dom';

export default function LoginScreen() {
  const history = useHistory();
  async function confirmLogin () {
    history.push('/dashboard');
  }
    const username = {
    marginRight: '5px',
    width: '90%',
    marginBottom: '2.5%'
  }

  const password = {
    width: '90%',
    height: '120%'
  }

  return (
      <div id="container">
        <div id="info"> 
          <h2> Prolvan Timetabling</h2>
          <div> This is a timetabling service brought to you by Prolvan and co!</div>
        </div>
        <div className="loginPage">
          <h2>Login</h2>
          <form>
            <TextField id="loginUsername" label="Username" variant="outlined" style={username}/>
            <TextField id="loginPassword" label="Password" variant="outlined" type="password" style={password} />
            <div className="loginButton">

              <Link to="/timetables" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Link>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="secondary">
                  Register
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
  )
}