const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");


app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

let authFunctions = require('./backend/auth');
let authRegister = authFunctions.authRegister;
let authLogin = authFunctions.authLogin;

// authRegister('testname', 'test', 'email', 'password', 'pp', 'tt');
// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;
  // console.log(req);

  // Generate some passwords
  const passwords = {
      'passwords': 'testing'
  }

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${passwords} passwords`);
});

app.post('/auth/register', (req, res) => {
  authRegister(req.body.name, req.body.email, req.body.password, req.body.profile_picture, req.body.todays_trip);
});

app.post('/auth/login', (req, res) => {

});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);