const mysql = require("mysql");

module.exports = mysql.createPool({
    user:'bd1220da909f23',
    host:'us-cdbr-east-03.cleardb.com',
    password:'0ae36ce9',
    database:'heroku_12ec767a3b06d47',
});