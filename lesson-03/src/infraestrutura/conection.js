const mysql = require('mysql');
const conection = mysql.createConnection({
    host:'localhost',
    port: 3306 ,
    user:'root',
<<<<<<< HEAD
    password:'1234',
    database:'agenda-petshop'
=======
    password:'123456',
    database:'agenda-pet-shop'
>>>>>>> 31b5e12c4bdcce3c7b5c8dfd9dbce383f932c4a0
})

module.exports = conection;
