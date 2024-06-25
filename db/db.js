/**
 * Seteo y conexion a database 
 * Pedalear
*/

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: 'root',
    database: 'pedalear'
});

connection.connect((error)=>{
    if(error){
        console.error('Error de conexion a DDB', error);
        return;
    }
    console.log('Conectado OK a la database. ');
    
});

module.exports = connection;