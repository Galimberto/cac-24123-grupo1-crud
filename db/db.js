/**
 * Seteo y conexion a database 
 * Pedalear
*/

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3307,
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