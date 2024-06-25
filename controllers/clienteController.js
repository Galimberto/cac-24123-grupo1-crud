/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllCliente
 * .getClienteBydni
 * .createCliente
 * .updateCliente
 * .deleteCliente
 */

//1- Importamos el módulo db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require("../db/db.js");

//2- getAllClientes
const getAllClientes = (req,res)=>{
    // creamos la consulta para traer todas los clientes           
    const sql ='SELECT clientes.Idcliente,clientes.dni,clientes.nombre,clientes.email,clientes.direccion,clientes.telefono,clientes.observaciones,provincia.provincia, rutas.nombreruta,rutas.tiporuta FROM clientes LEFT JOIN provincia ON clientes.Idcliente = provincia.Idcliente LEFT JOIN rutas ON clientes.Idcliente = rutas.Idcliente';
    //Enviamos la consulta a la bbdd
    
    db.query(sql, (error, result)=>{
        //si sucede error
        if(error){throw error};
        //si todo sale bien
        res.json(result);
    });
};
//3- getMovieBydni
const getClienteBydni = (req,res)=>{
    // obtenemos el dni solicitado
    // Tomamos la solicitud y extraemos su dni
    // Esta es una notacion de desestructuración {dni}
    const {dni} = req.params; // const dni = req.params.dni // 

    // consulta a la bbdd ? es un marcador de posicion
    const sql = 'SELECT clientes.Idcliente,clientes.dni,clientes.nombre,clientes.email,clientes.direccion,clientes.telefono,clientes.observaciones,provincia.provincia, rutas.nombreruta,rutas.tiporuta FROM clientes LEFT JOIN provincia ON clientes.Idcliente = provincia.Idcliente LEFT JOIN rutas ON clientes.Idcliente = rutas.Idcliente WHERE dni = ?'
    // Enviamos la consulta
    db.query(sql, [dni],(error,result)=>{
        //si sucede error
        if(error){throw error};
        //si todo sale bien
        res.json(result);
    });
};

// createMovie

const createMovie = (req,res)=>{
    // Desestructuramos la request
    const {title, director,year} =req.body;

    // creamos la consulta
    const sql = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?)';

    // pasamos la consulta
    db.query(sql,[title,director,year], (error,result)=>{
        //si sucede error
        if(error){throw error};
        //si todo sale bien
        res.json({mensaje: "Pelicula creada"});
    })
}

// updateMovie

const updateMovie = (req,res)=>{
    // Destructuramos la peticion
    const {id} = req.params;
    const{title,director,year} = req.body;

    // Consulta con marcadores
    const sql = 'UPDATE movies SET title = ?, director = ?, year = ? WHERE id = ?';

    // Pasamos la consulta
    db.query(sql, [title, director, year, id], (error, result)=>{
        //si sucede un error
        if(error){throw error};
        //si todo sale bien
        res.json({mensaje: "Pelicula actualizada"});
   })
}

// deleteMovie
const deleteMovie = (req,res)=>{
    // desestructuracion
    const {id} = req.params;
    // consulta sql
    const sql = 'DELETE FROM movies WHERE id = ?';

    // Pasamos la consulata a db
    db.query(sql,[id], (error, result)=>{
        //si sucede un error
        if(error){throw error};
        //si todo sale bien
        res.json({mensaje: "Pelicula borrada"});
    })
}


// Exportamos el modulo
module.exports = {
    getAllClientes,
    getClienteBydni,
    /* createMovie,
    updateMovie,
    deleteMovie */
};