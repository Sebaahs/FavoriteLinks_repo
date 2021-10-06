const mysql = require('mysql'); /* <-- modulo de conexion MySQL */
const { database } = require('./keys'); /* <-- almacena el objeto de conexion <-> DATABASE */
const pool = mysql.createPool(database); /* <-- crea un pool ( conexion a la base de datos ) */
const { promisify } = require('util'); /* <-- modulo para usar promesify y no callback */

pool.getConnection((err, connection) =>{/* <-- configura mensajes de error */

    if (err) {  /* <-- comprobar error de conexion */
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('la conexion a la base de datos fue cerrada');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.log('La base de datos cuenta con muchas conexiones');
        }
        if (err.code === 'ECONNREFUSED') {
            console.log('la conexion a la base de datos fue rechazada');
        }
    }
    if(connection)connection.release(); /* <-- inicializacion de conexion a la base de datos */
        console.log('DB conectada');
        return;
});

pool.query = promisify(pool.query); /* <-- casteo de callback a promesify */


module.exports = pool; 