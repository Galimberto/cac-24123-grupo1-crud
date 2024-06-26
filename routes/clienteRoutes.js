
 // Enrutador  Endpoints

const express = require("express");

const router = express.Router();

// Importamos el controlador de funciones
const clienteController = require("../controllers/clienteController");

// Planteamos las solicitudes GET, POST, PUT, DELETE
// ruta del listado general
router.get("/list", clienteController.getAllClientes);
// ruta para consultas parametricas
router.get("/:dni", clienteController.getClienteBydni);
// ruta para crear clientes
    router.post("/reg", clienteController.createCliente);
// ruta para actualizar cliente
    router.put("/:dni", clienteController.updateCliente);
// ruta para borrar cliente
    router.delete("/:dni", clienteController.deleteCliente);

module.exports = router;




