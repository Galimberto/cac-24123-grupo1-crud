/**
 * Enrutador 
 * Endpoints
 */

//1- Importamos al modulo express
const express = require("express");

//2- Instanciamos Router de express
const router = express.Router();

//3- Importamos el controlador de funciones
const movieController = require("../controllers/movieController");

//4- Planteamos las solicitudes GET, POST, PUT, DELETE
// ruta del listado general
router.get("/list", movieController.getAllMovies);
// ruta para consultas parametricas
router.get("/:id", movieController.getMovieById);
// ruta para crear peliculas
router.post("/create", movieController.createMovie);
// ruta para actualizar
router.put("/:id", movieController.updateMovie);
// ruta para borrar pelicula
router.delete("/:id", movieController.deleteMovie);

//5- Exportamos el modulo
module.exports = router;

//6- Pasamos a movieController


