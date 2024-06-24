/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllMovies
 * .getMovieById
 * .createMovie
 * .updateMovie
 * .deleteMovie
 */

//1- Importamos el módulo db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require("../db/db.js");

//2- getAllMovies
const getAllMovies = (req,res)=>{
    // creamos la consulta para traer todas las pelis
    const sql = "SELECT * FROM movies";

    //Enviamos la consulta a la bbdd
    db.query(sql, (error, result)=>{
        //si sucede error
        if(error){throw error};
        //si todo sale bien
        res.json(result);
    });
};

//3- getMovieById
const getMovieById = (req,res)=>{
    // obtenemos el id solicitado
    // Tomamos la solicitud y extraemos su id
    // Esta es una notacion de desestructuración {id}
    const {id} = req.params; // const id = req.params.id

    // consulta a la bbdd ? es un marcador de posicion
    const sql = 'SELECT * FROM movies WHERE id = ?'

    // Enviamos la consulta
    db.query(sql, [id],(error,result)=>{
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
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};