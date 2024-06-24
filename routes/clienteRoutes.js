
 // Enrutador  Endpoints

const express = require("express");

const router = express.Router();

// Importamos el controlador de funciones
const clienteController = require("../controllers/clienteController");

// Planteamos las solicitudes GET, POST, PUT, DELETE
// ruta del listado general
router.get("/list", clienteController.getAllClientes);
// ruta para consultas parametricas
router.get("/:dni", clienteController.getClienteById);
// ruta para crear clientes
router.post("/reg", clienteController.regcliente);
// ruta para actualizar cliente
router.put("/:dni", clienteController.updatecliente);
// ruta para borrar cliente
router.delete("/:dni", clienteController.deletecliente);

module.exports = router;




