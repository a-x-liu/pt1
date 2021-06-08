const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.generateAccessToken = function(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET);
}