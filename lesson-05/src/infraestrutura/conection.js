const mysql = require('mysql');
const conectionParams = require('./conection-params'); 
const conection = mysql.createConnection(conectionParams)
module.exports = conection;
