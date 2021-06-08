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

  return (
    <div>
      <div>
        <h1 style={{ marginTop: '0' }}>Login</h1>
        <form>
          <div style={{ marginBottom: '3%' }}>
            <TextField
              name="username"
              label="Username"
            />
            <TextField
              name="password"
              label="Password"
              type="Password"
            />
          </div>
          <Link to="/dashboard" style={{ textDecoration: 'none' }} onClick={confirmLogin}>
            <Button name="login" variant="contained" color="primary">
              Login
            </Button>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Button name="register" variant="contained" color="secondary">
              Register
            </Button>
          </Link>
        </form>
      </div>
    </div>
  )
}