const db = require('./database');
const { nanoid } = require('nanoid')
const utils = require('./utils');

exports.authRegister = function(name, email, password, profile_picture, todays_trip) {
    console.log('register');
    const user_id = nanoid();
    db.query(`INSERT INTO users (user_id, token, user_name, email, user_password, profile_picture, todays_trip) 
        VALUES ("${user_id}", "${token}", "${name}", "${email}", "${password}", "${profile_picture}", "${todays_trip}");`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('fine');
            }
        });
}

exports.authLogin = function(username, password) {
    console.log('login');
    const generateAccessToken = utils.generateAccessToken;
    const token = generateAccessToken(username);
}